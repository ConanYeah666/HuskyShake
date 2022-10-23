import React, { useEffect, useState, onSubmit } from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Text,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';


export default function NoteInputModal ({ visible, onClose, onSubmit }) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleModalClose = () => {
        Keyboard.dismiss();
    };

    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'title') setTitle(text);
        if (valueFor === 'desc') setDesc(text);
    };

    const handleSubmit = () => {
        if (!title.trim() && !desc.trim()) return onClose();

        //if (isEdit) {
          //onSubmit(title, desc, Date.now());
        //} else {
          onSubmit(title, desc);
          setTitle('');
          setDesc('');
        //}
        onClose();
      };

    const closeModal = () => {
        //if (!isEdit) {
          setTitle('');
          setDesc('');
        //}
        onClose();
    };

  return (
      <>
      <StatusBar hidden />
    <Modal visible = {visible} animationType='fade'>
        <View>
            <TextInput
                value={title}
                onChangeText={text => handleOnChangeText(text, 'title')}
                placeholder='Title'
                style={[styles.input, styles.title]}
            />
            <TextInput
                value={desc}
                multiline
                placeholder='Note'
                style={[styles.input, styles.desc]}
                onChangeText={text => handleOnChangeText(text, 'desc')}
            />
            <View style={styles.btnContainer}>
                <RoundIconBtn
                    size={15}
                    antIconName='check'
                    onPress={handleSubmit}
                />
                {title.trim() || desc.trim() ? (
                <RoundIconBtn
                    size={15}
                    style={{ marginLeft: 15 }}
                    antIconName='close'
                    onPress={closeModal}
                />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>

  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 15,
    },
    input: {
      borderBottomWidth: 2,
      borderBottomColor: colors.PRIMARY,
      fontSize: 30,
      color: colors.DARK,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      height: 40,
      marginTop: 20,
      marginBottom: 15,
    },
    desc: {
      height: 100,
    },
    modalBG: {
      flex: 1,
      zIndex: -1,
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 15,
    },
  });