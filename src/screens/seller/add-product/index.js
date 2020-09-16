import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableWithoutFeedback,FlatList, Platform, ScrollView } from 'react-native'
import { Button, TouchableRipple, FAB,IconButton } from 'react-native-paper'
import { Colors, Metrics, Images } from '../../../themes'
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
const AddProductScreen = ({navigation}) => {
    const [dialog, setDialog] = useState(false)
  const [phone, setPhone] = useState(null)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isStart, setIstart] = useState(true);

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

  const textInputChange = (val) => {
    setPhone(val)
  }
  return(
    <>
    <IconButton
      icon="arrow-left"
      color="#A17A1F"
      style={{ backgroundColor: '#FFF'}}
      size={25}
      onPress={() => navigation.goBack()}
    />
    <ScrollView style={{ flex: 1, backgroundColor: Colors.background,  }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        <TouchableRipple 
          onPress={() => {
              ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
          }}
        style={{ backgroundColor: Colors.primary, borderRadius: 20, width: 300, height: 300,  justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
          <Icon
            name="camera"
            size={120}
            style={{margin: 20}}
            color={Colors.white}
          />
        </TouchableRipple>
        </View>
      <View style={{marginTop: 8, padding: 20}}>
        <View style={styles.action}>
             <TextInput
                value={phone}
                keyboardType="number-pad"
                placeholder="Nama Produk"
                style={styles.textInput}
                onChangeText={(val) => textInputChange(val)}
              />
          </View>
          <View style={styles.action}>
             <TextInput
                value={phone}
                keyboardType="number-pad"
                placeholder="Harga Normal (Rp)"
                style={styles.textInput}
                onChangeText={(val) => textInputChange(val)}
              />
          </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'LatoBold', color: '#A17A1F', marginRight: 16 }}>Mulai PO</Text>
            <TouchableRipple onPress={() => {
              setShow(true)
            }}  style={[styles.action, {flex: 1, height: 70}]}>
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
            }}  style={[styles.action, {flex: 1, height: 70}]}>
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
    </View>
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
      />)
    }
  </ScrollView>
  <View style={{padding: 10,backgroundColor: Colors.background, }}>
         <Button 
              mode="contained"
              onPress={() => {

              } }
              uppercase={false}
              labelStyle={{
                fontFamily: 'LatoBold',
                letterSpacing: 0,
                padding: 8,
              }}
              style={{ borderRadius: 20 }}
            >
              Selesai
            </Button>
    </View>
            </>
  )
}

export default AddProductScreen