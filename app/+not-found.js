import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { theme, styles } from "./core/theme";
import { Provider } from "react-native-paper";

export default function NotFound() {
  return (
    <>  
    <Provider theme={theme}>
    <View style={styles.container}>
        <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <Text style={styles.text}>Screen NotFound</Text>
      <Link href="/" style={styles.link}>
        Go to home
      </Link>
    </View>
    </Provider>
    </>
  );
}
