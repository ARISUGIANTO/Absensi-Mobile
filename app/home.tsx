import { View, Text, StyleSheet, Alert, TouchableOpacity, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
    const navigation = useNavigation();

    const [presensiData, setPresensiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [todayData, setTodayData] = useState(null);

    const getPresensiData = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (!token) {
                Alert.alert('Error', 'Token tidak ditemukan. Harap login kembali.');
                return;
            }

            const response = await fetch('http://192.168.0.11:8000/api/get-presensi', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const result = await response.json();
            console.log("Response from get-presensi API:", result);

            if (response.ok && result.success) {
                setPresensiData(result.data);

                // Cari data hari ini dari respons API
                const today = result.data.find(item => item.is_hari_ini);
                if (today) {
                    setTodayData(today);
                }
            } else {
                Alert.alert('Error', result.message || 'Gagal mengambil data presensi.');
            }
        } catch (error) {
            console.error('Error fetching presensi data:', error);
            Alert.alert('Error', 'Tidak dapat terhubung ke server.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPresensiData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi, Selamat Datang di Sistem Absensi👋</Text>
            {todayData && (
                <View style={styles.papan}>
                    <Text style={styles.text1}>{todayData.tanggal}</Text>
                    <Text style={styles.text2}>{todayData.masuk || '-'}</Text>
                    <Text style={styles.text3}>MASUK</Text>
                    <Text style={styles.text4}>{todayData.pulang || '-'}</Text>
                    <Text style={styles.text5}>PULANG</Text>
                </View>
            )}
            <Text style={styles.text}>RIWAYAT ABSENSI</Text>
            <FlatList
                data={presensiData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <View style={styles.waktu}>
                        <Text style={styles.textW}>{item.tanggal}</Text>
                        <Text style={styles.textW1}>Masuk</Text>
                        <Text style={styles.textW2}>{item.masuk || '-'}</Text>
                        <Text style={styles.textW3}>Pulang</Text>
                        <Text style={styles.textW4}>{item.pulang || '-'}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.bulat}
                style={styles.bulat}
                onPress={() => navigation.navigate('lokasi')}
            >
                <Text style={styles.textbulat}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 16,
        backgroundColor: '#e9f3ff',
    },
    text: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    papan: {
        // flex: 2,
        backgroundColor: '#0b1957',
        width: '98%',
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
        position: 'relative',
        padding: 10,
    },
    text1: {
        marginTop: 10,
        left: '50%',
        transform: [{ translateX: -78 }],
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text2: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: 10 }],
        color: 'white',
        fontSize: 40,
        marginLeft: 20
    },
    text3: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: 50 }],
        color: 'white',
        fontSize: 25,
        marginLeft: 26
    },
    text4: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: 10 }],
        color: 'white',
        fontSize: 40,
        marginRight: 26
    },
    text5: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: 50 }],
        color: 'white',
        fontSize: 25,
        marginRight: 26
    },
    waktu: {
        backgroundColor: '#0b1957',
        width: '98%',
        height: 70,
        borderRadius: 20,
        marginBottom: 10,
        position: 'relative',
        justifyContent: 'center',
        padding: 10,
    },
    textW: {
        color: 'white',
        left: 20,
    },
    textW1: {
        color: "white",
        position: 'absolute',
        right: 70,
        transform: [{ translateY: -10 }, { translateX: 5 }]
    },
    textW2: {
        color: 'white',
        position: 'absolute',
        right: 70,
        transform: [{ translateY: 10 }]
    },
    textW3: {
        color: "white",
        position: 'absolute',
        right: 70,
        transform: [{ translateY: -10 }, { translateX: 58 }]
    },
    textW4: {
        color: 'white',
        position: 'absolute',
        right: 20,
        transform: [{ translateY: 10 }]
    },
    bulat: {
        width: 50,
        height: 50,
        backgroundColor: '#0b1957',
        borderRadius: 50,
        position: 'absolute',
        right: 28,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center'


    },
    textbulat: {
        fontSize: 50,
        color: 'white',
        top: -9

    },
});