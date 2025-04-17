import { Button, Text, View } from "react-native";
import { styles } from "./core/theme";
import Logo from "./helper/logo";
import { useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';

export default function Index() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Welcome to The Study IAS</Text>
      <Button
        title="Get Started"
        onPress={() => {
          navigation.navigate("login");
          console.log("Button Pressed");
        } }
        color="#333"
      />
    </View>
  );
}