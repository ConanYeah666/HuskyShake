import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainPage from '../components/mainpage/mainpage';
import SeriousBoard from '../components/seriousboard/seriousboardmain';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={MainPage} />
        <Stack.Screen name='Serious' component={SeriousBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}