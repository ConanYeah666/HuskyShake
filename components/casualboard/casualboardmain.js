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
import { stringLength } from '@firebase/util';


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const initialList = [{
  id: '',
      isActive: true,
      name: '',
      age: 5,
      place: '',
      rate: 64,
      tags: [''],
      Description: ''
}]
var count = 0;
const read = async (building, list, setList) => {
  const querySnapshot = await getDocs(collection(db, building)) ;
  querySnapshot.forEach((doc) => {
    setList(oldList => [...oldList, {
      id: doc.id + '',
      isActive: true,
      name: doc.data().userid,
      age: 5,
      place: doc.data().title,
      rate: 64,
      tags: doc.data().tag,
      Description: doc.data().content
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
  console.log(list)
  // find();
  // read();
  return(
    <View style={styles.container}>
      <SwipeableCards 
        data={list}
        onLike={() => console.log('Like!')}
        onSkip={() => console.log('Skip')}
        onLikeWithMessage = {() => console.log("Post") }
        renderItem={(item, index) => (
          <View style = { { width: '100%', height: '100%', backgroundColor: '#4b2e83'}}>
            {console.log(item.id)}
            <Text style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginVertical: '50%',
                  marginHorizontal: '5%'
                }}>{item.Description} </Text>
            <View
              style={{
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
                paddingHorizontal: 16,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                {`${item.age} years old`}
              </Text>
              <Text
                style={{
                  color: '#b7a57a',
                  fontWeight: 'bold',
                  fontSize: 16,
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
                      fontSize: 8,
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