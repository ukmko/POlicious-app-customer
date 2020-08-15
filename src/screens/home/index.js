import React, { useEffect, useState } from 'react'
// import { inject, observer  } from 'mobx-react'
import { Text } from 'react-native-paper'
import { Colors, Metrics } from '../../themes'
import {View, Animated, Platform, FlatList, RefreshControl } from 'react-native'
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

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <HeadScreen
        head={headerTranslate}
        headText={headerTranslateText}
      />
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={
          Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: animate }
              }
            }],
            { useNativeDriver: true },
          )
        }
        refreshControl={
          <RefreshControl
            progressViewOffset={HEADER_MAX_HEIGHT}
            colors={[Colors.primary]}
            refreshing={refreshing} onRefresh={onRefresh}
          />
        }
        contentInset={{
          top: HEADER_MAX_HEIGHT,
        }}
        contentOffset={{
          y: -HEADER_MAX_HEIGHT,
        }}
      >
        <View style={styles.scrollViewContent}>
          <Text>aaa</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
          <Text>dd</Text>
        </View>
      </Animated.ScrollView>
    </View>
  )
}


// const HomeScreenContainer = inject('exampleStore', 'dialogStore')(
//   observer(HomeScreen),
// )

export default HomeScreen
