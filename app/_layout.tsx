import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="login"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="signup"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="(nav)"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="+not-found"
      options={{
        title: "Oops!",
        headerShown: false,
      }}
    />    
  </Stack>
}
