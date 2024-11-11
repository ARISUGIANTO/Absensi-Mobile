import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from "react-native";
import { useNavigation } from "expo-router";  // Gunakan expo-router jika Anda menggunakan Expo
import React, { useState } from "react";

export default function LoginScreen() {
  const navigation = useNavigation();

  // State untuk menyimpan inputan email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk kontrol modal

  const handleLoginPress = () => {
    // Jika login berhasil, tampilkan pop-up
    setIsModalVisible(true);

    // Simulasi proses login
    setTimeout(() => {
      setIsModalVisible(false); // Menutup modal setelah beberapa detik
      navigation.navigate("home"); // Navigasi ke halaman home setelah login berhasil
    }, 4000); // Menunggu 2 detik sebelum pindah ke halaman home
  };

  return (
    <View style={styles.container}>
      <View style={styles.kotak}>
        <Text style={styles.text}>LOGIN</Text>
        <Text style={styles.text1}>
          Sudah Punya Akun?
          <Text style={styles.text2}>Daftar</Text>
        </Text>

        {/* Input Email */}
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.kotakE}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Input Password */}
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.kotakE}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.forget}>
          <View style={styles.cekbot}></View>
          <Text style={styles.cekbot2}>Ingat Aku</Text>
          <Text style={styles.cekbot3}>Lupa Password</Text>
        </View>

        <TouchableOpacity style={styles.masuk} onPress={handleLoginPress}>
          <Text style={styles.masuk2}>MASUK</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Pop-Up LOGIN BERHASIL */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* GIF Animation for Checkmark */}
            <Image
              source={require('../assets/images/berhasil.gif')}  // Pastikan path menuju file GIF benar
              style={styles.icon}
            />
            <Text style={styles.modalText}>LOGIN BERHASIL</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    transform: [{ translateY: -60 }],
    fontSize: 20,
  },
  text1: {
    color: "white",
    transform: [{ translateY: -60 }],
    fontSize: 10,
    marginLeft: 5,
  },
  text2: {
    color: "red",
    fontSize: 10,
    margin: 5,
  },
  email: {
    color: "white",
    transform: [{ translateX: -95 }],
    marginBottom: 8,
  },
  password: {
    color: "white",
    transform: [{ translateX: -85 }],
    marginBottom: 8,
  },
  kotak: {
    width: "80%",
    height: "75%",
    backgroundColor: "#0b1957",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
  },
  kotakE: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  masuk: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  forget: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cekbot: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    margin: 5,
    left: -20,
  },
  cekbot2: {
    color: "white",
    left: -20,
  },
  cekbot3: {
    color: "white",
    right: -20,
  },
  masuk2: {
    color: "#0b1957",
  },

  // Style untuk Modal Pop-Up
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparan hitam di belakang modal
  },
  modalContent: {
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 200,
    height: 180,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0b1957", // Warna biru
  },
});
