import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Logo from './helper/logo';
import { styles } from './core/theme';
import { Link } from 'expo-router';
import { router } from 'expo-router';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        router.push('/home');   
    };

    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.button}>
            <Button title="Login" onPress={handleLogin} />
            </View>
            <Text style={styles.text}>Don't have an account?
            <Link href="./signup">
                <Text style={styles.link}> Signup</Text>
            </Link>
            </Text>
        </View>
    );
}