import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Dimensions,
    Button,
    Modal,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { getFirestore, collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import app from '../../../config/firebase';
import React, {useState, useEffect, useContext} from 'react'
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';
import NoteInputModal from './NoteInputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from './Note';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const initialList = [];

function NoteScreen ({navigation, route}) {
    const [list, setList] = React.useState(initialList);
    const { buildingname } = route.params;
    // write("test33", "content33", "title33", buildingname);
    useEffect(() => {
      // findNotes()
      async function getData() {
        await read(buildingname, list, setList);
      }
      async function setData() {
        await deploy();
      }
      getData();
      setData();
    }, []);

    const [modalVisible, setModalVisible] = useState(false);
    const [notes, setNotes] = useState([]);

    const read = async (building, list, setList) => {
      const querySnapshot = await getDocs(collection(db, building));
      querySnapshot.forEach((doc) => {
        setList(oldList => [...oldList, doc.data()]);
    });


  };
  const deploy = async () => {
    list.forEach((data) => {
      const title = data.title;
      const desc = data.content;
      const note = { id: Date.now(), title, desc, time: Date.now() };
      // const updatedNotes = [...notes, note];
      setNotes(notes => [...notes, note]);
    })
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const write = async (bname, bcontent, btitle, buildingname) => {
    try {
      const docRef = await addDoc(collection(db, buildingname), {
        userid: 123,
        buildingname: bname,
        content: bcontent,
        title: btitle,
        date: Timestamp.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


    const handleOnSubmit = async (title, desc) => {
        const note = { id: Date.now(), title, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const openNote = note => {
        navigation.navigate('NoteDetail', { note });
      };

    return (
          <>
          <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/>
          <View style = {styles.container}>
          <View>
            {/* <Text>{buildingname}</Text>
              {list.map(data => (
                <Text>{data.content}</Text>
              ))} */}
          </View>
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