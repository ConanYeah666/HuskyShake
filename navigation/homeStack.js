import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from '../components/mainpage/mainpagemain'

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={MainPage} />
    </Stack.Navigator>
  );
}