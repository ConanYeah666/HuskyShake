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
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import app from '../../config/firebase';
import { route, navigation } from '@react-navigation/native';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
import React from 'react';

function SeriousBoard({route, navigation}) {
  const { buildingname, otherParam } = route.params;
  // find();
  // read();

  return(
    <View>
      <Text>{buildingname}</Text>
      <Text>hiiii</Text>
    </View>
  );
}

const read = async () => {
    const querySnapshot = await getDocs(collection(db, "seriousboard"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
};

const write = async (bname, bcontent, btitle) => {
  try {
    const docRef = await addDoc(collection(db, "seriousboard"), {
      buildingname: bname,
      content: bcontent,
      title: btitle
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default SeriousBoard;