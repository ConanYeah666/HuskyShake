import React, {useState, useEffect} from 'react'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'
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
} from 'react-native';

const cancel = require('./img/cancel.png')

// get user current location and update map
const userLocation = async () => {
  let {status} = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    setErrorMsg('Permission to access location denied');
  }
  let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
  setMapRegeion({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });
}

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
        <Text>Hi</Text>
      </View>
    </Modal>
  );
};

const App1 = () => {
  const [mapRegion, setMapRegeion] = useState({
    latitude: 47.65440627742146,
    longitude: -122.30476957834502,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });

  const [visible, setVisible] = React.useState(false);
  const [building, setBuilding] = React.useState("");
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
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'left', flexDirection:'row'}}>
          <Image
            source={buildingimg}
            style={{height: 183, width: 244, marginVertical: 10, borderRadius: 20, borderColor: '#452A77', borderWidth: 5,}}
          />
            <Text style={{marginHorizontal: 19, marginVertical: 10, fontSize: 30, textAlign: 'left', width: '50%'}}>{building}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}><Button title='Casual Board' onPress={userLocation}/></View>
          <View style={styles.button}><Button title='Serious Board' onPress={userLocation}/></View>
        </View>
      </ModalPoup>
      {/* Map */}
      <MapView
        style={styles.map}
        region={mapRegion}
      >
          {locdata.map((val, i) => {
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
                  setMapRegeion({
                    latitude: val.coords.latitude,
                    longitude: val.coords.longitude,
                  });
                }}

              />
            )
          })}
        {/* <Button title = 'Get Current Location' onPress={userLocation}/> */}
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
    width: '50%',
    height: '60%',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    borderColor: '#452A77',
    borderWidth: 10,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    flexDirection:'row',
  },
});

export default App1;