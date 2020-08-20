import React from 'react'
import {
  Text,
  Image,
  View,
  Animated,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Metrics, Images } from '../../../themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge,TouchableRipple, IconButton } from 'react-native-paper'

import styles from './style'

const HeadScreen = ({ head, headText }) => (
  <Animated.View style={[
    styles.headContainer,
    // { transform: [{ translateY: head }]}
  ]}>
    <LinearGradient
      colors={[Colors.primary, Colors.primaryDark]}
      style={styles.linearGradient}
    >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{  flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ maxWidth: 30, height: 30 }}
        source={Images.smallLogo}
      />
    </View>
    <Animated.View
      style={[
        styles.searchInputButton,
        {
          flex: 6,
          // transform: [{translateY: headText }]
        }
      ]}
    >
      <TouchableRipple  style={{zIndex: 1 }} onPress={() => {
        console.log('a')
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="magnify"
            size={Metrics.fontNormal}
            color={Colors.silver}
          />
          <Text style={styles.placeholder}>
            Cari Sesuatu ...
          </Text>
        </View>
      </TouchableRipple>
    </Animated.View>
    <View
      style={{
        flex: 1
      }}
    >
    <View style={{ position: 'relative' }}>
      <IconButton
        icon="bell"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <Text style={{ position: 'absolute', top: 6, right: 8, backgroundColor: 'red', borderRadius: 60, width: 20, height: 20, textAlign: 'center', fontSize: 12, justifyContent: 'center', alignItems: 'center', color: '#FFFFFF' }}>2</Text>
    </View>
    </View>
    </View>
    </LinearGradient>
  </Animated.View>
)

export default HeadScreen