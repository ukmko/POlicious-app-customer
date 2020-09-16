import React, { useEffect, useState } from 'react'

import { Button, Text, TouchableRipple, FAB,IconButton } from 'react-native-paper'
import { View,Image, TextInput, TouchableWithoutFeedback,FlatList, Platform } from 'react-native'
import Modal from 'react-native-modal'
import styles from './style'
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-crop-picker';

import HeadScreen from './head'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconMt from 'react-native-vector-icons/MaterialIcons'

import { Colors, Metrics, Images } from '../../../themes'

const food = [
  {
    id: 1,
    image: Images.food1,
    isPoStart: false,
    name: 'Sate Tempe',
    price: '12.000'
  },
  {
    id: 2,
    image: Images.food2,
    isPoStart: true,
    name: 'Cake Lime',
    price: '15.000'
  },
  {
    id: 3,
    image: Images.food3,
    isPoStart: true,
    name: 'Stick Meal',
    price: '15.000'
  },
   {
    id: 4,
    image: Images.food4,
    isPoStart: true,
    name: 'Sate Tempe',
    price: '15.000'
  },
  {
    id: 5,
    image: Images.food1,
    isPoStart: false,
    name: 'Sate Tempe',
    price: '12.000'
  },
  {
    id: 6,
    image: Images.food2,
    isPoStart: true,
    name: 'Cake Lime',
    price: '15.000'
  },
  {
    id: 7,
    image: Images.food3,
    isPoStart: true,
    name: 'Stick Meal',
    price: '15.000'
  },
   {
    id: 8,
    image: Images.food4,
    isPoStart: true,
    name: 'Sate Tempe',
    price: '15.000'
  },
]

const HomeScreen = ({navigation}) => {
  const [dialog, setDialog] = useState(false)
  const [phone, setPhone] = useState(null)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isStart, setIstart] = useState(true);

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
          data={food}
          renderItem={({ item }) =>(

              <View style={styles.item}>
                <TouchableRipple onPress={() => {
                  console.log('dd')
                }} style={{elevation: 20, shadowColor: "#000", borderRadius: 20, position: 'relative', overflow: 'hidden'}}>
                <>
                  <View style={{position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.413)', bottom: 0, zIndex: 999, elevation: 1, flexDirection: 'row', width: '100%', padding: 8, justifyContent: 'center'}}>
                    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 6}}>
                      <Icon
                        name="heart"
                        size={Metrics.fontNormal}
                        style={{marginHorizontal: 4}}
                        color={Colors.white}
                      />
                      <Text
                        style={{color: Colors.white}}
                      >15</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 6}}>
                      <Icon
                        name="comment"
                        size={Metrics.fontNormal}
                        color={Colors.white}
                        style={{marginHorizontal: 4}}
                      />
                      <Text
                        style={{color: Colors.white}}
                      >5</Text>
                    </View>
                  </View>
                  <Image  style={styles.imageStyle} source={item.image} />
                  </>
                </TouchableRipple>
                <View style={{ padding: 8, marginTop: 4, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 14, fontFamily: 'LatoBold', color:Colors.primary}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 12, fontFamily: 'LatoRegular', color:Colors.primary}}>
                      Rp. 15.000
                    </Text>
                    {item.isPoStart ? <View style={{marginTop: 4}}>
                      <Text style={{ fontFamily: 'LatoRegular', fontSize: 12,  color: '#000' }}>
                        PO 15/08 - 20/08
                      </Text>
                      <Text style={{ fontFamily: 'LatoRegular', fontSize: 12, color: '#000' }}>
                        Delivery 21/08
                      </Text>
                    </View>
                    : <View  style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 8 }} >
                      <Button 
                        onPress={() => {
                          setDialog(true)
                        }}
                      mode="outlined" style={{ borderRadius: 15, borderColor: Colors.primary}} uppercase={false}>
                        Start PO
                      </Button>
                    </View>}
                  </View>
                  <View >
                    <IconButton
                      icon="border-color"
                      onPress={() => {
                        navigation.push('AddProductScreen')
                      }}

                      size={Metrics.fontBig}
                      color={Colors.primary}
                    />
                  </View>
                </View>
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
        onPress={() => {
          navigation.push('AddProductScreen')
        }}
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
