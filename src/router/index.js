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
import LoginScreen from '../screens/session/login'
import SignupScreen from '../screens/session/signup'
import SignupSellerScreen from '../screens/session/signup-seller'
import CartScreen from '../screens/cart'
import {AuthContext} from '../context'

import { Colors } from '../themes'

import { StyleSheet } from 'react-native'

const NavigationRouter = () => {
  const stateHandler = (prevState, newState, action) => {
    // eslint-disable-next-line no-console
    console.log('onStateChange: ACTION:', action)
  }
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

   const authContext = React.useMemo(() => ({
    signIn: () => {
      setUser('fdsds')
    },
   }))
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
        <AuthContext.Provider value={authContext}>
    <Router
      panHandlers={null}
      onStateChange={stateHandler}
      hideNavBar
      backAndroidHandler={onBackPress}
    >
      <Overlay key="overlay">
        <Modal key="modal" hideNavBar>
          <Tabs
              initial={user}
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
                  component={CartScreen}
                />
                <Scene
                  key="search"
                  component={CartScreen}
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
                  component={CartScreen}
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
                  component={CartScreen}
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
                  component={CartScreen}
                  hideNavBar
                />
              </Stack>
            </Tabs>
            <Scene
              key="auth"
              initial={!user}
              component={AuthScreen}
              hideNavBar
            />
            <Scene
              key="login"
              component={LoginScreen}
              hideNavBar
            />
            <Scene
              key="signup"
              component={SignupScreen}
              hideNavBar
            />
            <Scene
              key="signup-seller"
              component={SignupSellerScreen}
              hideNavBar
            />
        </Modal>
      </Overlay>
    </Router>
        </AuthContext.Provider>
  )
}

export default NavigationRouter
