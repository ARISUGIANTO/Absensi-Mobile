import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Modal, Image, Linking } from 'react-native';

export default function Lokasi() {
    const [modalVisible, setModalVisible] = React.useState(false);

    const handleSave = () => {
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 1500); // Pop-up disappears after 1.5 seconds
    };

    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <Image
                    source={require('../assets/images/uim.png')}
                    style={styles.mapImage}
                    resizeMode="cover"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
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
                        <Text style={styles.modalText}>Data Berhasil disimpan</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f3ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: 'auto',
        borderRadius: 50,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#0b1957',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mapImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '70%',
        backgroundColor: '#0b1957',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
