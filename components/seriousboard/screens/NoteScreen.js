import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
  } from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';
import NoteInputModal from './NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import Note from './Note';

function NoteScreen ({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [notes, setNotes] = useState([]);
    // const handleOnSubmit = (title, desc) => {
        
    // }
    const handleOnSubmit = async (title, desc) => {
        const note = { id: Date.now(), title, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes');
        // console.log(result);
        if (result !== null) setNotes(JSON.parse(result))
    }
    
    useEffect(() => {
        findNotes()
    }, [])

    const openNote = note => {
        navigation.navigate('NoteDetail', { note });
      };

    return (
          <> 
          
          <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/>
        <View style = {styles.container}>
            <Text style={styles.header}>Hello</Text>
            <FlatList
                data={notes}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: 15,
                }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Note onPress={() => openNote(item)} item = {item}/>}
            />
        </View>
        <RoundIconBtn 
            onPress={() => setModalVisible(true)}
            antIconName='plus'
            style={styles.addBtn}/>
        <NoteInputModal 
            visible = {modalVisible} 
            onClose={() => setModalVisible(false)}
            onSubmit={handleOnSubmit}
        />
        </>
        
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    container: {
      paddingHorizontal: 20,
      flex: 1,
      zIndex: 1,
    },
    emptyHeader: {
      fontSize: 30,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      opacity: 0.2,
    },
    emptyHeaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: -1,
    },
    addBtn: {
      position: 'absolute',
      right: 15,
      bottom: 50,
      zIndex: 1,
    },
  });

export default NoteScreen;