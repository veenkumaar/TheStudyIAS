import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from './core/theme';
import Logo from './helper/logo';
import { Link, router } from 'expo-router';

export default function SignupScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
       console.log('Name:', name); 
       console.log('Email:', email);
       console.log('Phone:', phone);

       router.push('/home');
    };

    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Welcome to the Signup Page</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <View style={styles.button}>
                <Button title="Signup" onPress={handleSignup} />
            </View>
            <Text style={styles.text}>Already have an account?
                <Link href="./login">
                    <Text style={styles.link}> Login</Text>
                </Link>
            </Text>
        </View>
    );
}