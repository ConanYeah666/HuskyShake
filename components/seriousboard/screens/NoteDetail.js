import React from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import colors from '../misc/colors';

// const formatDate = ms => {
//     const date = new Date(ms);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const hrs = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();

//     return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
//   };

export default function NoteDetail(props) {
    const {note} = props.route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.time}>{note}</Text> */}
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc}>{note.content}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      borderWidth: 5,
      borderRadius: 20,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 50,
      color: colors.PRIMARY,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    desc: {
      fontSize: 20,
      opacity: 0.6,
      textAlign: 'center',
    },
    time: {
      textAlign: 'right',
      fontSize: 12,
      opacity: 0.5,
    },
    btnContainer: {
      position: 'absolute',
      right: 15,
      bottom: 50,
    },
  });