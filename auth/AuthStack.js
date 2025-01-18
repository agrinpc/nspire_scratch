import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './AuthContext';  // Use the AuthContext

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;