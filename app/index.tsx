// app/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../auth/AuthContext';
import { View, Text } from 'react-native';

export default function Index() {
	const { user, loading } = useAuth();
	const router = useRouter();
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true); 
	}, []);

	useEffect(() => {
		if (isLayoutReady && !loading) {
			if (user) {
				console.log('Redirecting to Home...');
				router.replace('/(tabs)/home');
			} else {
				console.log('Redirecting to Login...');
				router.replace('/login');
			}
		}
	}, [isLayoutReady, loading, user]);

	if (!isLayoutReady || loading) {
			return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}
	return null;
}