import { Stack } from "expo-router";
import HomeScreen from "./index";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }} />
    </Stack>
  );
}
