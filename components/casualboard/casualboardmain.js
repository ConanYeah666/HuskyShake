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
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import app from '../../config/firebase';
import { route, navigation } from '@react-navigation/native';
import { SwipeableCards, BORDER_RADIUS } from 'react-native-pairs-swipeable-cards';
import { StatusBar } from 'expo-status-bar';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
import React from 'react';

function CasualBoard() {
const data = [
  {
    id: 'misono',
    isActive: true,
    name: '高村美園',
    age: 25,
    place: '神奈川県',
    rate: 64,
    tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
    Text: "I like your father"
  },
  {
    id: 'arisa',
    isActive: false,
    name: '須藤亜里沙',
    age: 24,
    place: '福岡県',
    rate: 64,
    tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
    Text: "I like your mother"
  },
  {
    id: 'sasaki',
    isActive: false,
    name: '佐々木涼平',
    age: 24,
    place: '東京都',
    rate: 64,
    tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
    Text: "I like your mother"
  },
  {
    id: 'tsugumi',
    isActive: true,
    name: '川本つぐみ',
    age: 24,
    place: '東京都',
    rate: 64,
    tags: ['読書好き', '友達みたいな恋人が・・・', '気ままにドライブに行きたい!'],
    Text: "I like your mother"
  },
];

  // find();
  // read();

  return(
    <View style={styles.container}>
      <SwipeableCards
        data={data}
        onLike={() => console.log('Like!')}
        onSkip={() => console.log('Skip')}
        renderItem={(item, index) => (
          <View>
            <Text style={{
                  color: '#00000',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginVertical: '50%',
                  marginHorizontal: '5%'
                }}>What the fucking thing is that? </Text>
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
                  color: '#00000',
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
                  color: '#00000',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                {`${item.age} years old`}
              </Text>
              <Text
                style={{
                  color: '#00000',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                }}
              >
                {`${item.place}`}
              </Text>
              <Text
                style={{
                  color: '#00000',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {`♡${item.rate}%`}
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
                    backgroundColor: '#00000',
                  }}
                >
                  <Text
                    style={{
                      color: '#000000',
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

const read = async () => {
    const querySnapshot = await getDocs(collection(db, "casualboard"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
};

const write = async (bname, bcontent, btitle) => {
  try {
    const docRef = await addDoc(collection(db, "casualboard"), {
      buildingname: bname,
      content: bcontent,
      title: btitle
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CasualBoard;