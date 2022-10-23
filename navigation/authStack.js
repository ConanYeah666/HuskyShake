import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../components/loginpage/loginPage';
import SignupPage from '../components/signuppage/signupPage';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Login' component={LoginPage} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#85754d',
          },
          headerTintColor: '#DCDCDC',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name='Signup' component={SignupPage} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#85754d',
          },
          headerTintColor: '#DCDCDC',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
  );
}