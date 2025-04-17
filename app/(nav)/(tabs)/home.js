import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { styles } from '../../core/theme';
import { Provider } from 'react-native-paper';
import Logo from '../../helper/logo';

export default function Home() {
  return (
    <>
      <Provider>
        <View style={styles.container}>
          <Stack.Screen options={{ title: 'Home' }} />
          <Logo />
          <Text style={styles.text}>Welcome to the Home Page</Text>
        </View>
      </Provider>
    </>
  );
}