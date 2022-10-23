import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../misc/colors';

const image = { uri: "https://reactjs.org/logo-og.png" }
function Note ({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          {/* <Text numberOfLines={3}>{item.content}</Text> */}
        </TouchableOpacity>
    );
  };

const width = Dimensions.get('window').width - 70;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    marginHorizontal: 25,
    marginVertical: 15,
    width: width / 2 - 100,
    height: 100,
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    color: colors.LIGHT,
  },
});

export default Note;