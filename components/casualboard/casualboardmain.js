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
  ImageBackground
} from 'react-native';
import { getFirestore, collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import app from '../../config/firebase';
import { route, navigation } from '@react-navigation/native';
import { SwipeableCards, BORDER_RADIUS } from 'react-native-pairs-swipeable-cards';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect}from 'react';
import { BottomNavigationTab } from '@ui-kitten/components';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const initialList = [];



const read = async (building, list, setList) => {
  const querySnapshot = await getDocs(collection(db, building));
  querySnapshot.forEach((doc) => {
    setList(oldList => [...oldList, {
      id: doc.id,
      isActive: true,
      name: doc.data().userid ,
      age: doc.data().date,
      place: doc.data().title,
      rate: 64,
      tags: doc.data().tag,
      Description: "If there's any body that could be one of my freind?"
    }]);
});
};

function CasualBoard({route}) {

const [list, setList] = React.useState(initialList);
  const { buildingname } = route.params;
  // write("test33", "content33", "title33", buildingname);
  useEffect(() => {
    async function getData() {
      await read(buildingname, list, setList);
    }
    getData();
  }, []);
  // find();
  // read();

  const data = [
    {
      id: 'misono',
      isActive: true,
      name: 'Kenan Ye',
      age: 20,
      place: 'CSE2',
      rate: 64,
      tags: ['Find Partner', 'Looking for friend'],
      Description: "If there's any body that could be one of my freind?"
    },
    {
      id: 'arisa',
      isActive: true,
      name: 'Allan Ji',
      age: 21,
      place: 'HUB',
      rate: 64,
      tags: ['Find partner', 'CSE446', 'Machine Learning'],
      Description: "I'm looking for a partner to work on CSE 446! It's too hard for me!'"
    },
    {
      id: 'sasaki',
      isActive: true,
      name: 'Caleb Huang',
      age: 22,
      place: 'HUB',
      rate: 64,
      tags: ['DubHack22', '24 hour work'],
      Description: "Dubhack22 is coming! I'm ready to work 24 hours! Anyone interested?"
    },
    {
      id: 'tsugumi',
      isActive: true,
      name: 'Anonymous',
      age: 21,
      place: 'ODE',
      rate: 64,
      tags: ['Work together', 'Trouble with HW'],
      Description: "If there's any body could help me with the homework?"
    },
  ];

  return(
    <View style={styles.container}>
      <SwipeableCards
        data={data}
        onLike={() => console.log('Like!')}
        onSkip={() => console.log('Skip')}
        onLikeWithMessage = {() => console.log("Post") }
        renderItem={(item, index) => (
          <View style = { { width: '100%', height: '100%', backgroundColor: '#4b2e83'}}>
            <Text style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 40,
                  marginVertical: '10%',
                  marginHorizontal: '20%',
                  alignItems: 'center'
                }}>{item.Description} </Text>
            <View
              style={{
                marginVertical: '0%',
                marginHorizontal: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 25,
                  alignItems: 'center',
                  backgroundColor: item.isActive ? '#2cd26b' : '#cc0033',
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  
                  fontSize: 32,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: '20%',
                paddingHorizontal: 16,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginRight: 10,
                }}
              >
                {`${item.age} years old`}
              </Text>
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginRight: 10,
                }}
              >
                {`${item.place}`}
              </Text>
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                marginHorizontal: '20%',
              }}
            >
              {item.tags.map(tag => (
                <View
                  key={`tag_${tag}`}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    borderRadius: 6,
                    marginRight: 6,
                    backgroundColor: '#fff',
                  }}
                >
                  <Text
                    style={{
                      color: '#b7a57a',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CasualBoard;