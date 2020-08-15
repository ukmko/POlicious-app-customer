import React from 'react'
import {
  Text,
  Image,
  View,
  Animated,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Metrics, Images } from '../../themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableRipple, IconButton } from 'react-native-paper'

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
            Cari Sesuatu
          </Text>
        </View>
      </TouchableRipple>
    </Animated.View>
    <View
      style={{
        flex: 1
      }}
    >
      <IconButton
        icon="bell"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
    </View>
    <View style={{ marginTop: 48, width: '100%', paddingHorizontal: Metrics.bigMargin }}>
      <Text style={{ color: Colors.white, fontSize: Metrics.fontNote }}>
        Hallo, Oxsa ...
      </Text>
      <Text style={{ color: Colors.white, fontSize: Metrics.fontXSmall }}>
        Sekarang mudah Pre-Order makanan favourite
      </Text>
    </View>
    </LinearGradient>
  </Animated.View>
)

export default HeadScreen