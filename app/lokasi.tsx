import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Modal,
    Image,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";

export default function Lokasi() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [region, setRegion] = useState({
        latitude: -7.10884,
        longitude: 113.51235,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    // Mendapatkan izin lokasi dan mengambil geolocation
    useEffect(() => {
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
                const location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;
                setLatitude(latitude);
                setLongitude(longitude);
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                });
            } else {
                Alert.alert("Permission Denied", "Lokasi tidak diizinkan.");
            }
        };

        getLocation();
    }, []);

    // Fungsi untuk menyimpan absensi
    const handleSave = async () => {
        if (latitude === null || longitude === null) {
            Alert.alert("Error", "Tidak dapat mengambil lokasi.");
            return;
        }

        const token = await AsyncStorage.getItem("authToken");
        if (!token) {
            Alert.alert("Error", "Token tidak ditemukan. Harap login kembali.");
            return;
        }

        setLoading(true);

        // Kirim data ke API
        try {
            const response = await fetch("http://192.168.0.11:8000/api/save-presensi", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    latitude,
                    longitude,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Set message dengan respons sukses dari API
                setMessage(result.message);
                setModalVisible(true);
                setTimeout(() => setModalVisible(false), 1500); // Pop-up disappears after 1.5 seconds
            } else {
                setMessage(result.message || "Gagal menyimpan lokasi.");
                Alert.alert("Error", result.message || "Gagal menyimpan lokasi.");
            }
        } catch (error) {
            console.error("Error saving attendance:", error);
            Alert.alert("Error", "Tidak dapat terhubung ke server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                provider={PROVIDER_GOOGLE}
                region={region}
            >
                {latitude && longitude && (
                    <Marker
                        coordinate={{ latitude, longitude }}
                        title="Lokasi Anda"
                        description="Inilah lokasi saat Anda melakukan absensi."
                    />
                )}
            </MapView>
            <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
                <Text style={styles.buttonText}>Simpan Absensi</Text>
            </TouchableOpacity>

            {/* Pop-up Modal */}
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{message}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9f3ff",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0b1957",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    mapImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "70%",
        backgroundColor: "#0b1957",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
