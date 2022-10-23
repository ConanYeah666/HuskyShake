import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import NoteScreen from '../components/seriousboard/screens/NoteScreen';
import NoteDetail from '../components/seriousboard/screens/NoteDetail';
import App1 from '../components/mainpage/mainpage'
import SeriousBoard from '../components/seriousboard/seriousboardmain';
import CasualBoard from '../components/casualboard/casualboardmain';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      {/* <Stack.Screen name='Home' component={App1} /> */}
      <Stack.Screen name='NoteScreen' component={NoteScreen} />
      <Stack.Screen name='NoteDetail' component={NoteDetail} />
      {/* <Stack.Screen name='Serious' component={SeriousBoard} />
      <Stack.Screen name='Casual' component={CasualBoard} /> */}
      
    </Stack.Navigator>
  );
}