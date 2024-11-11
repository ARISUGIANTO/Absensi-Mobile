import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    const lokasi = () => {
        navigation.navigate("lokasi");
    };


    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>ARI SUGIANTO</Text> */}
            <Text style={styles.text}>ARI SUGIANTO</Text>


            <View style={styles.papan}>
                <Text style={styles.text1}>11 November 2024</Text>
                <Text style={styles.text2}>07:00</Text>
                <Text style={styles.text3}>MASUK</Text>
                <Text style={styles.text4}>17:00</Text>
                <Text style={styles.text5}>PULANG</Text>
            </View>
            <Text style={styles.text}>RIWAYAT ABSENSI</Text>
            <View style={styles.waktu}>
                <Text style={styles.textW}>10 November 2024</Text>
                <Text style={styles.textW2}>07:00</Text>
                <Text style={styles.textW3}>MASUK</Text>
                <Text style={styles.textW4}>17:00</Text>
                <Text style={styles.textW5}>PULANG</Text>
            </View>
            <View style={styles.waktu}>
                <Text style={styles.textW}>09 November 2024</Text>
                <Text style={styles.textW2}>07:00</Text>
                <Text style={styles.textW3}>MASUK</Text>
                <Text style={styles.textW4}>17:00</Text>
                <Text style={styles.textW5}>PULANG</Text>
            </View>
            <View style={styles.waktu}>
                <Text style={styles.textW}>08 November 2024</Text>
                <Text style={styles.textW2}>07:00</Text>
                <Text style={styles.textW3}>MASUK</Text>
                <Text style={styles.textW4}>17:00</Text>
                <Text style={styles.textW5}>PULANG</Text>
            </View>
            <TouchableOpacity style={styles.bulat} onPress={lokasi}>
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
    waktu: {
        // flex: 2,
        marginTop: 10,
        backgroundColor: '#0b1957',
        width: '98%',
        height: 70,
        borderRadius: 20,
        position: 'relative',
        justifyContent: 'center'
    },
    text1: {
        marginTop: 10,
        left: '50%',
        transform: [{ translateX: -57 }],
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
    textW: {
        color: 'white',

        left: 20,
        top: '50%',
        transform: [{ translateY: -10 }]
    },
    textW2: {
        top: '50%',
        transform: [{ translateX: 170 }, { translateY: -30 }],
        color: 'white',
        fontSize: 14
    },
    textW3: {
        top: '50%',
        transform: [{ translateX: 170 }, { translateY: -30 }],
        color: 'white',
        fontSize: 11
    },
    textW4: {
        top: '50%',
        transform: [{ translateX: 220 }, { translateY: -53 }],
        color: 'white',
        fontSize: 14

    },
    textW5: {
        top: '50%',
        transform: [{ translateX: 220 }, { translateY: -53 }],
        color: 'white',
        fontSize: 11
    },
    bulat: {
        flex: 1,
        width: 50,
        height: 50,
        backgroundColor: '#0b1957',
        borderRadius: 50,
        position: 'absolute',
        right: 28,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textbulat: {
        fontSize: 50,
        color: 'white',


    }

});

