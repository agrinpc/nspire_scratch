import { Tabs } from "expo-router"
import { View, Text } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useAuth} from '../../auth/AuthContext'
import LoginScreen from '../../screens/LoginScreen'


export default function TabLayout() {
	const { user } = useAuth(); // Get current user from AuthContext

	if (!user) {
		// If the user is not logged in, show the login screen or any alternative
		return <LoginScreen />;
	}
	return (
		<Tabs screenOptions={{
			headerShown: false
		}}>
			<Tabs.Screen name="home" 
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
			}}/>
			<Tabs.Screen name="favorites" 
			options={{
				tabBarLabel: 'Favorites',
				tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />,
			}}/>
			<Tabs.Screen name="settings" 
			options={{
				tabBarLabel: 'Settings',
				tabBarIcon: ({ color }) => <FontAwesome size={24} name="cogs" color={color} />,
			}}/>
		</Tabs>
)
}