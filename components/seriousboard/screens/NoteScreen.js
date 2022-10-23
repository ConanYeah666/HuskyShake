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
// import app from '../../config/firebase';
import { getAuth } from 'firebase/auth';


// Initialize Cloud Firestore and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const initialList = [];

function NoteScreen ({navigation, route}) {
    // console.log();
    const [list, setList] = React.useState(initialList);
    const { buildingname } = route.params;
    // write("test33", "content33", "title33", buildingname);
    useEffect(() => {
      async function getData() {
        await read(buildingname);
      }
      getData();
    }, []);

    const [modalVisible, setModalVisible] = useState(false);

    const read = async (building) => {
      const querySnapshot = await getDocs(collection(db, building));
      querySnapshot.forEach((doc) => {
        setList(oldList => [...oldList, doc.data()]);
      });
    };

  const write = async (bcontent, btitle, buildingname) => {
    try {
      const docRef = await addDoc(collection(db, buildingname), {
        userid: auth.currentUser.email,
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
        await write(desc, title, buildingname);
        setList([]);
        await read(buildingname);
    };

    const openNote = note => {
        navigation.navigate('NoteDetail', { note });
      };

    return (
          <>
          <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/>
          <View style = {styles.container}>
            <Text style={styles.header}>Hello</Text>
            <FlatList
                data={list}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: 15,
                }}
                keyExtractor={item => list.data}
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