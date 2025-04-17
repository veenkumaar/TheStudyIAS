import { Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function About() {
    return (
        <View>
            <Stack.Screen options={{ title: 'About' }} />
            <Text>About Us</Text>
            <Text>This is a sample application.</Text>
        </View>
    );
}