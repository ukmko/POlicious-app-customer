import React from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import {
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFa from 'react-native-vector-icons/FontAwesome'
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../themes'

import styles from './styles'

const TabBar = ({ navigation }) => {
  const { routes, index } = navigation.state
  const returTabIcon = (iconName, focused) => {
    if (iconName === 'home') return <Icon color={focused ? '#A17A1F' : '#D4D4D4'} name='home-sharp' size={25} style={[focused && styles.iconShadow, {paddingBottom: 4}]}/>
    if (iconName === 'list') return  <Icon color={focused ? '#A17A1F' : '#D4D4D4'} name='list' size={25} style={[focused && styles.iconShadow, {paddingBottom: 4}]} />
    if (iconName === 'order') return   <IconMc color={focused ? '#A17A1F' : '#D4D4D4'} name='history' size={25} style={[focused && styles.iconShadow, {padding: 4}]} />
    if (iconName === 'account') return  <IconMc color={focused ? '#A17A1F' : '#D4D4D4'} name='account' size={25} style={[focused && styles.iconShadow, {paddingBottom: 4}]} />
  }

  return (
    <View style={styles.mainContainer}>
      {routes.map((element, i) => {
        const { iconName, title } = element.routes[0].params

        const focused = index === i
        const color = focused ? Colors.primary : Colors.darkSilver

        return (
          <TouchableWithoutFeedback
            key={element.key}
            style={{ backgroundColor: 'red'  }}
            onPress={() => {
              Actions[element.key]()
            }}
          >
            <View style={styles.tabContainer}>
              {returTabIcon(iconName, focused)}
              <Text
                style={[
                  styles.tabText,
                  { color },
                ]}
              >
                {title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}

TabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default TabBar
