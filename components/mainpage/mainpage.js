import React, {useState, useEffect, useContext} from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StatusBar } from 'expo-status-bar';
import {locdata} from './locdata'
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
import app from '../../config/firebase';
import { AuthenticatedUserContext } from '../../navigation/authenticatedUserProvider';
import { getAuth ,signOut } from 'firebase/auth';
import { IconButton } from '../../utils';
// import {  } from 'react-native-web';
const image = { uri: "https://t3.ftcdn.net/jpg/02/08/49/42/360_F_208494280_y6AlM0pJQXMSytDJ1jy77B28tJ69ghoU.jpg" };

const cancel = require('./img/cancel.png')

const auth = getAuth(app);

// the model
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

function App1({navigation}) {
  const [mapRegion, setMapRegeion] = useState({
    latitude: 47.65440627742146,
    longitude: -122.30476957834502,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const [visible, setVisible] = React.useState(false);
  const [building, setBuilding] = React.useState("");
  const [buildingserious, setBuildingserious] = React.useState("");
  const [buildingcasual, setBuildingcasual] = React.useState("");
  const [buildingimg, setBuildingimg] = React.useState("");
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Model */}
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={cancel}
                style={{height: 40, width: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: '40%',wide: 0,alignItems: 'center', flexDirection:'row'}}>
          <Image
            source={buildingimg}
            style={{height: '120%', width: '60%', marginVertical: '50%', marginHorizontal:'20%', borderRadius: 20, borderColor: '#452A77', borderWidth: 5,}}
          />
        </View>
        <Text style={{marginHorizontal: 0, marginVertical: "7%", fontSize: 35, textAlign: 'center', width: '100%'}}>{building}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}><Button backgroundColor='#b7a57a'
            title='CASUAL BOARD'
            tileColor='#fff'
            titleSize={10}
            containerStyle={{marginBottom: 10}}
            onPress={() => {
              setVisible(false);
              navigation.navigate('Casual', {
                buildingname: buildingcasual,
              })}}/>
          </View>
        <View style={styles.button}><Button backgroundColor='#b7a57a'
            title='EVENT BOARD'
            tileColor='#fff'
            titleSize={10}
            containerStyle={{
              marginBottom: 24
            }} onPress={() => {
              setVisible(false);
              navigation.navigate('Event', {
                buildingname: buildingserious,
              });}}/>
          </View>
        </View>
      </ModalPoup>
      {/* Map */}
      <MapView
        style={styles.map}
        region={mapRegion}
      >
          {locdata.map((val) => {
            return(
              <Marker
                key={val.id}
                coordinate={val.coords}
                title={val.title}
                // image={val.img}
                onPress={() => {
                  setVisible(true);
                  setBuildingimg(val.buildingImg);
                  setBuilding(val.title);
                  setBuildingserious(val.serious);
                  setBuildingcasual(val.casual);
                  setMapRegeion({
                    latitude: val.coords.latitude,
                    longitude: val.coords.longitude,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,
                  });
                }}

              />
            )
          })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: '80%',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 40,
    borderColor: '#452A77',
    borderWidth: 10,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    // width: '50%',
    // height: '50%'
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: '11.5%',
    paddingVertical: 10,
    paddingHorizontal: '5%',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#4b2e83',
    flexDirection:'row',
    marginTop: '-2%',
    width: '30%',
    height: '200%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000'
  },
  bottom: {
    marginTop: -20,
    marginBottom: 15,
  }
});

export default function MainPage({navigation}) {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
    })
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <App1 navigation={navigation}/>
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name='logout'
          size={24}
          color='#000000'
          onPress={handleSignOut}
        />
      </View>

      <Text style={[styles.text, styles.bottom]}>Your UID is: {user.uid} </Text>
    </View>
  );
}
