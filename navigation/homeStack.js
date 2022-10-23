import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App1 from '../components/mainpage/mainpage'
import MainPage from '../components/mainpage/mainpage';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={MainPage} />
    </Stack.Navigator>
  );
}