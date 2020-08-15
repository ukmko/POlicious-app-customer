import React, { useState, useEffect } from 'react'
// import { inject, observer } from 'mobx-react'
import {
  Scene,
  Router,
  Overlay,
  Modal,
  Tabs,
  Stack,
  Lightbox,
} from 'react-native-router-flux'

import TabBar from '../components/tab-bar'

// import BarSuccess from '../components/bar/success'
// import BarError from '../components/bar/error'

// import auth from '@react-native-firebase/auth'

import AuthScreen from '../screens/auth.js'
import HomeScreen from '../screens/home'
import { Colors } from '../themes'

import { StyleSheet } from 'react-native'

const NavigationRouter = () => {
  const stateHandler = (prevState, newState, action) => {
    // eslint-disable-next-line no-console
    console.log('onStateChange: ACTION:', action)
  }
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // function onAuthStateChanged(user) {
  //   setUser(user)
  //   if (initializing) setInitializing(false)
  // }

  // useEffect(() => {
  //   // const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
  //   // return subscriber // unsubscribe on unmount
  // }, [])

  // // if (initializing) return null

  const onBackPress = () => {
    console.log('exit app...')
  }

  return (
    <Router
      panHandlers={null}
      onStateChange={stateHandler}
      hideNavBar
      backAndroidHandler={onBackPress}
    >
      <Overlay key="overlay">
        <Modal key="modal" hideNavBar>
          <Tabs
              initial
              key="tabbar"
              tabBarPosition="bottom"
              hideNavBar
              tabBarStyle={{backgroundColor: "red"}}
              tabBarComponent={TabBar}
            >
              <Stack
                hideNavBar
                initial
                key="tabHome"
                iconName="home"
                title="Home"
              >
                <Scene
                  initial
                  key="home"
                  component={HomeScreen}
                />
                <Scene
                  key="category"
                  component={AuthScreen}
                />
                <Scene
                  key="search"
                  component={AuthScreen}
                />
              </Stack>
              <Stack
                key="tabCart"
                iconName="list"
                title="Cart"
                hideNavBar
              >
                <Scene
                  key="cart"
                  component={AuthScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                key="tabProfile"
                title="Order"
                iconName="order"
                hideNavBar
              >
                <Scene
                  key="profile"
                  component={AuthScreen}
                  hideNavBar
                />
              </Stack>
              <Stack
                iconName="account"
                key="tabAccount"
                title="Account"
                hideNavBar
              >
                <Scene
                  key="profile"
                  component={AuthScreen}
                  hideNavBar
                />
              </Stack>
            </Tabs>
        </Modal>
      </Overlay>
    </Router>
  )
}

export default NavigationRouter
