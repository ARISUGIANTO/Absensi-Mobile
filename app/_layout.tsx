import { Stack } from "expo-router";
import HomeScreen from "./home";
import LoginScreen from "./index";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="lokasi"
        options={{ headerShown: false }}
      />

    </Stack>
  );
}
