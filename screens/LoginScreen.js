import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../auth/AuthContext'; // Use the AuthContext
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('User logged in');
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.textInput}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
	  <TouchableOpacity style={{width: '100%'}} onPress={handleLogin}>
		<Text style={styles.btn}>Login</Text>
	  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100vh',
		padding: 40
	},
	textInput: {
		width: '100%',
		marginVertical: 30
	},
	btn: {
		display: 'block',
		width: '100%',
		padding: 10,
		borderRadius: 100,
		backgroundColor: 'blue',
		textAlign: 'center',
		color: '#fff',
		marginTop: 20
	}
})

export default LoginScreen;