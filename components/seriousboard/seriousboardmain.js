import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { getFirestore, collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import app from '../../config/firebase';
import React, {useState, useEffect, useContext} from 'react'
import { route, navigation } from '@react-navigation/native';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const initialList = [];


function SeriousBoard({route, navigation}) {
  const [list, setList] = React.useState(initialList);
  const { buildingname } = route.params;
  // write("test33", "content33", "title33", buildingname);
  useEffect(() => {
    async function getData() {
      await read(buildingname, list, setList);
    }
    getData();
  }, []);

  return(
    <View>
      <Text>{buildingname}</Text>
        {list.map(data => (
          <Text>{data.content}</Text>
        ))}
    </View>
  );
}

const read = async (building, list, setList) => {
    const querySnapshot = await getDocs(collection(db, building));
    querySnapshot.forEach((doc) => {
      setList(oldList => [...oldList, doc.data()]);
  });
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

export default SeriousBoard;