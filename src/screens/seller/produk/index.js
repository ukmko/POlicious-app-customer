import React, { useEffect, useState } from 'react'

import { Button, Text, TouchableRipple, FAB  } from 'react-native-paper'
import { View,Image, TextInput, TouchableWithoutFeedback,FlatList, Platform } from 'react-native'
import Modal from 'react-native-modal'
import styles from './style'
import DateTimePicker from '@react-native-community/datetimepicker';
import HeadScreen from './head'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Metrics, Images } from '../../../themes'

const HomeScreen = () => {
  const [dialog, setDialog] = useState(false)
  const [phone, setPhone] = useState(null)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const textInputChange = (val) => {
    setPhone(val)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const modal = () => {
    return (
      <Modal 
        onBackdropPress={() => {
                setDialog(false)
        }}
        useNativeDriver={true}
        testID={'modal'} swipeDirection={['down']}
        isVisible={dialog}
         style={{margin: 0 ,justifyContent: 'flex-end',}}
      >
         <View style={styles.content}>
          <Text style={styles.textFooter}>Pre-Order</Text>
        <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'LatoBold', color: '#A17A1F', marginRight: 16 }}>Mulai PO</Text>
            <TouchableRipple onPress={() => {
              setShow(true)
            }}  style={[styles.action, {flex: 1}]}>
              <Text
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  style={[styles.textInput, { opacity: 0.4 }]}
                >
                  dd / mm / yyyy
                </Text>
            </TouchableRipple>
        </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'LatoBold', color: '#A17A1F', marginRight: 16 }}>Mulai PO</Text>
            <TouchableRipple onPress={() => {
              setShow(true)
            }}  style={[styles.action, {flex: 1}]}>
              <Text
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  style={[styles.textInput, { opacity: 0.4 }]}
                >
                  dd / mm / yyyy
                </Text>
            </TouchableRipple>
        </View>
            <View style={styles.action}>
             <TextInput
                value={phone}
                keyboardType="number-pad"
                placeholder="Harga Promo (Rp)"
                style={styles.textInput}
                onChangeText={(val) => textInputChange(val)}
              />
          </View>
           <Button 
              mode="contained"
              onPress={() => {
                setDialog(false)
              } }
              uppercase={false}
              labelStyle={{
                fontFamily: 'LatoBold',
                letterSpacing: 0,
              }}
              style={{ marginTop: 20, borderRadius: 20 }}
            >
              Selesai
            </Button>
        </View>
        </View>
        </Modal>
    )
  }

  const listItem = () => {
    return (
         <FlatList
          contentContainerStyle={styles.listContainer}
          numColumns={2}
          data={[{ id: 1 }, { id: 2 }, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7}, { id: 8}, { id: 9}, { id: 10},]}
          renderItem={({ item }) =>(
              <View style={styles.item}>
                <Image  style={styles.imageStyle} source={Images.food2} />
            </View>
          )}
          keyExtractor={item => item}
        />
    )
  }

  return (
    <>
      <HeadScreen/>
      {listItem()}
      <Button
        onPress={() => {
          setDialog(true)
        }}
      >
        dd
      </Button>
      {modal()}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          style={{backgroundColor:'red'}}
          minimumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
       <Button
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        uppercase={false}
        labelStyle={{
          color: '#fff',
          letterSpacing: 0,
          fontFamily: 'LatoBold',
        }}
        icon="plus"
      >
        Produk
      </Button>
    </>
  )
}

export default HomeScreen
