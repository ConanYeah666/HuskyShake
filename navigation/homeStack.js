import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteScreen from '../components/seriousboard/screens/NoteScreen';
import NoteDetail from '../components/seriousboard/screens/NoteDetail';
import App1 from '../components/mainpage/mainpage'
import CasualBoard from '../components/casualboard/casualboardmain';
import { LogBox } from 'react-native';
import userInterface from '../components/userinterface/userinterfacemain';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={userInterface} />
      <Stack.Screen name='Event' component={NoteScreen} />
      <Stack.Screen name='NoteDetail' component={NoteDetail} />
      <Stack.Screen name='Casual' component={CasualBoard} />
    </Stack.Navigator>
  );
}