import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State untuk checkbox

  const handleLoginPress = async () => {
    try {
      const response = await fetch("http:/192.168.0.11:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const { token, token_type } = result.data;
        await AsyncStorage.setItem("authToken", `${token_type} ${token}`);

        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
          navigation.navigate("home");
        }, 4000);
      } else {
        Alert.alert("Login Gagal", result.message || "Terjadi kesalahan saat login.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Tidak dapat terhubung ke server.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.kotak}>
            <Text style={styles.text}>LOGIN</Text>
            <Text style={styles.text1}>
              Sudah Punya Akun?
              <Text style={styles.text2}> Daftar</Text>
            </Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.forget}>
              <TouchableOpacity
                style={[
                  styles.cekbot,
                  { backgroundColor: isChecked ? "red" : "white" }, // Ubah warna jika dicentang
                ]}
                onPress={() => setIsChecked(!isChecked)} // Toggle checkbox
              />
              <Text style={styles.cekbot2}>Ingat Aku</Text>
              <Text style={styles.cekbot3}>Lupa Password</Text>
            </View>
            <TouchableOpacity style={styles.masuk} onPress={handleLoginPress}>
              <Text style={styles.masuk2}>MASUK</Text>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <LottieView
                  source={require("../assets/animations/Animation.json")}
                  autoPlay
                  loop={false}
                  style={styles.lottie}
                />
                <Text style={styles.modalText}>LOGIN BERHASIL</Text>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    fontSize: width * 0.05,
    marginBottom: height * 0.02,
  },
  text1: {
    color: "white",
    fontSize: width * 0.035,
    marginBottom: height * 0.03,
  },
  text2: {
    color: "red",
    fontSize: width * 0.035,
  },
  label: {
    color: "white",
    alignSelf: "flex-start",
    marginBottom: height * 0.01,
    fontSize: width * 0.04,
  },
  kotak: {
    width: width * 0.8,
    backgroundColor: "#0b1957",
    borderRadius: 20,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
  input: {
    width: width * 0.7,
    height: height * 0.06,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.03,
  },
  masuk: {
    width: width * 0.7,
    height: height * 0.06,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  masuk2: {
    color: "#0b1957",
    fontSize: width * 0.04,
  },
  forget: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.01,
    marginBottom: height * 0.03,
  },
  cekbot: {
    width: width * 0.04,
    height: width * 0.04,
    borderWidth: 1,
    borderColor: "#0b1957",
    borderRadius: 20,
    marginRight: width * 0.02,
  },
  cekbot2: {
    color: "white",
    fontSize: width * 0.035,
  },
  cekbot3: {
    color: "white",
    marginLeft: 20,
    fontSize: width * 0.035,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
  },
  icon: {
    width: width * 0.5,
    height: width * 0.4,
    marginBottom: width * 0.05,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  modalText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#0b1957",
  },
});
