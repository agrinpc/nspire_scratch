import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../config/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUser = async () => {
			try {
				const storedUser = await AsyncStorage.getItem('userToken');
				if (storedUser) {
					console.log("user id = " + storedUser);
					setUser(storedUser);
				}
			} catch (error) {
				console.error(error);
			}
		};

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				AsyncStorage.setItem('userToken', currentUser.uid);
				console.log("user id = " + currentUser.uid);
				
				setUser(currentUser);
			} else {
				AsyncStorage.removeItem('userToken');
				setUser(null);
			}
			setLoading(false);
		});

		checkUser();
		return () => unsubscribe();
	}, []);

	const login = async (email, password) => {
		setLoading(true);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
			await AsyncStorage.setItem('userToken', userCredential.user.uid);
			return userCredential.user;
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		setLoading(true);
		try {
			await signOut(auth);
			await AsyncStorage.removeItem('userToken');
			setUser(null);
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{user, loading, login, logout}} >
			{!loading && children}
		</AuthContext.Provider>
	);
};