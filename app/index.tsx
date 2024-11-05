import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  const showAlert = () => {
    Alert.alert("Informasi", "Aplikasi belum selesai");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ARI SUGIANTO</Text>
      <View style={styles.papan}>
        <Text style={styles.text1}>05 November 2024</Text>
        <Text style={styles.text2}>07:00</Text>
        <Text style={styles.text3}>MASUK</Text>
        <Text style={styles.text4}>17:00</Text>
        <Text style={styles.text5}>PULANG</Text>
      </View>
      <Text style={styles.text}>RIWAYAT ABSENSI</Text>
      <View style={styles.waktu}>
        <Text style={styles.textW}>05 November 2024</Text>
        <Text style={styles.textW2}>07:00</Text>
        <Text style={styles.textW3}>MASUK</Text>
        <Text style={styles.textW4}>17:00</Text>
        <Text style={styles.textW5}>PULANG</Text>
      </View>
      <View style={styles.waktu}>
        <Text style={styles.textW}>06 November 2024</Text>
        <Text style={styles.textW2}>07:00</Text>
        <Text style={styles.textW3}>MASUK</Text>
        <Text style={styles.textW4}>17:00</Text>
        <Text style={styles.textW5}>PULANG</Text>
      </View>
      <View style={styles.waktu}>
        <Text style={styles.textW}>07 November 2024</Text>
        <Text style={styles.textW2}>07:00</Text>
        <Text style={styles.textW3}>MASUK</Text>
        <Text style={styles.textW4}>17:00</Text>
        <Text style={styles.textW5}>PULANG</Text>
      </View>
      {/* <View style={styles.bulat}>
        <Text style={styles.textbulat}>+</Text>
      </View> */}
      <TouchableOpacity style={styles.bulat} onPress={showAlert}>
        <Text style={styles.textbulat}>+</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 16,
    backgroundColor: '#97BE5A',
  },
  text: {
    fontSize: 20,
    marginBottom: 5
  },
  papan: {
    // flex: 2,
    backgroundColor: '#FF0000',
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
    backgroundColor: '#FF0000',
    width: '98%',
    height: 70,
    borderRadius: 20,
    position: 'relative',
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
    position: 'absolute', // Mengatur posisi text2 menjadi absolute
    left: 10, // Menentukan jarak dari kiri
    top: '50%', // Memusatkan secara vertikal
    transform: [{ translateY: 50 }], // Menggeser setengah tinggi teks untuk memusatkan
    color: 'white',
    fontSize: 25,
    marginLeft: 26
  },
  text4: {
    position: 'absolute', // Mengatur posisi text2 menjadi absolute
    right: 10, // Menentukan jarak dari kiri
    top: '50%', // Memusatkan secara vertikal
    transform: [{ translateY: 10 }], // Menggeser setengah tinggi teks untuk memusatkan
    color: 'white',
    fontSize: 40,
    marginRight: 26
  },
  text5: {
    position: 'absolute', // Mengatur posisi text2 menjadi absolute
    right: 10, // Menentukan jarak dari kiri
    top: '50%', // Memusatkan secara vertikal
    transform: [{ translateY: 50 }], // Menggeser setengah tinggi teks untuk memusatkan
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
    transform: [{ translateX: 170 }, { translateY: -35 }],
    color: 'white',
    fontSize: 14
  },
  textW3: {
    top: '50%',
    transform: [{ translateX: 170 }, { translateY: -40 }],
    color: 'white',
    fontSize: 11
  },
  textW4: {
    top: '50%',
    transform: [{ translateX: 220 }, { translateY: -69 }],
    color: 'white',
    fontSize: 14

  },
  textW5: {
    top: '50%',
    transform: [{ translateX: 220 }, { translateY: -73.5 }],
    color: 'white',
    fontSize: 11
  },
  bulat: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: '#5E1675',
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
    transform: [{ translateY: -10 }],


  }

});

