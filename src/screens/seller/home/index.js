import React, { useEffect, useState } from 'react'
// import { inject, observer  } from 'mobx-react'
import { Text, TouchableRipple } from 'react-native-paper'
import { Colors, Metrics, Images } from '../../../themes'
import {View, Animated, Platform, FlatList, RefreshControl, Image, ScrollView } from 'react-native'
// import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'

import HeadScreen from './head'

const HEADER_MAX_HEIGHT = 126
const HEADER_MIN_HEIGHT = 73
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const HomeScreen = () => {
  const [animate] = useState( new Animated.Value(0))
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    // console.log(exampleStore.sayHello)
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [refreshing])


  const scrollY = Animated.add(
    animate,
    Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
  )

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  })

  const headerTranslateText = scrollY.interpolate({
    inputRange: [3, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 24],
    extrapolate: 'clamp',
  })


  const groupItem = () => (
    <View>
      <View style={styles.groupItem}>
        <Text>Job Based Your Interested</Text>
        <Text style={{ color: Colors.primary }}>Lihat Semua</Text>
      </View>
      <FlatList
        data={ Array.from({ length: 2 })}
        renderItem={({ item }) => <Item onSelectItem={() => {
          // dialogStore.setDialog('item', { id: 1 })
        }} key={item} />}
        keyExtractor={item => item}
      />
      <Item />
    </View>
  )

  const headerItem = () => {
    return (
      <View
        style={styles.headHome}
      >
      <View style={{width: '80%',}}>
        <Text style={{ color: Colors.white, fontSize: Metrics.fontNote, fontFamily: 'LatoBold', lineHeight: Metrics.fontHeader }}>
          Hallo, Oxsa ...
        </Text>
        <Text style={{ color: Colors.white, fontSize: 12, fontFamily: 'LatoRegular', lineHeight: Metrics.fontHeader }}>
          Raih sukses walaupun di rumah aja
        </Text>
      </View>
      </View>
    )
  }

  return (
    <>
      <HeadScreen
        head={headerTranslate}
        headText={headerTranslateText}
      />
      <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
      {headerItem()}
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#EEEEF6', width: '80%', marginTop: -50, height: 100, borderRadius: 10, zIndex: 999, elevation: 50, alignItems: 'center', paddingHorizontal: 20 }}>
          <View style={{ paddingHorziontal: 12, alignItems: 'center'}}>
            <Image  style={{ maxWidth: 24, height: 24}}  source={Images.saldo} /> 
            <Text style={{ fontFamily: 'LatoBold', color: '#000000', fontSize: 12, marginTop: 4}}>Saldo</Text>
          </View>
          <View style={{flex: 1, marginRight: 12, flexDirection: 'row', alignItems: 'center', color: '#000000', paddingLeft: 20}}>
            <Text style={{ fontWeight: "700", fontSize: 20, color: '#000000' }}>Rp</Text>
            <Text style={{ fontWeight: "700", fontSize: 20, color: '#000000', marginLeft: 10 }}>0</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3, paddingHorizontal: 16}}>
        <TouchableRipple  onPress={() =>{
          console.log('s')
         }} style={{ backgroundColor: '#FFFFFF', borderRadius: 20, flexDirection: 'row', padding: 12, alignItems: 'center', elevation: 5, marginBottom: 18 }}>
         <>
          <Image  style={{ width: 64, height: 68, margin: 12}}  source={Images.tips1} /> 
          <Text style={{ fontFamily: 'LatoBold', fontSize: 18, flex: 1, marginLeft: 10, color: Colors.primary}}>Tips berjualan untuk pengusaha pemula</Text>
         </>
        </TouchableRipple>
         <TouchableRipple  onPress={() =>{
          console.log('s')
         }} style={{ backgroundColor: '#FFFFFF', borderRadius: 20, flexDirection: 'row', padding: 12, alignItems: 'center', elevation: 5, marginBottom: 18 }}>
          <>
            <Image  style={{ width: 64, height: 68, margin: 12}}  source={Images.tips2} /> 
            <Text style={{ fontFamily: 'LatoBold', fontSize: 18, flex: 1, marginLeft: 10, color: Colors.primary}}>Siap untuk mulai berjualan? Buat Produk</Text>
          </>
        </TouchableRipple>
          <TouchableRipple  onPress={() =>{
          console.log('s')
         }} style={{ backgroundColor: '#FFFFFF', overflow: 'hidden', borderRadius: 20, flexDirection: 'row', padding: 12, alignItems: 'center', elevation: 5, marginBottom: 18 }}>
         <>
            <Image  style={{ width: 64, height: 68, margin: 12}}  source={Images.tips3} /> 
            <Text style={{ fontFamily: 'LatoBold', fontSize: 18, flex: 1, marginLeft: 10, color: Colors.primary}}>Ingin lebih mahir berjualan? Konsultasi dengan Ahli</Text>
         </>
        </TouchableRipple>
      </View>
      </ScrollView>
    </>
  )
}


// const HomeScreenContainer = inject('exampleStore', 'dialogStore')(
//   observer(HomeScreen),
// )

export default HomeScreen
