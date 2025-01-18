import { Slot, Stack } from "expo-router";
import { AuthProvider } from '../auth/AuthContext';

export default function RootLayout() {
	return (
		<AuthProvider>
			<Slot />
		</AuthProvider>
	)
}