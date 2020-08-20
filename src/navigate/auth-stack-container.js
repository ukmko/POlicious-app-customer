import React from 'react'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import AuthScreen from '../screens/auth.js'
import LoginScreen from '../screens/session/login'
import SignupScreen from '../screens/session/signup'
import SignupSellerScreen from '../screens/session/signup-seller'

// import SplashScreen from './SplashScreen'
// import SignUpScreen from './SignUpScreen'
// import SignInScreen from './SignInScreen'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator
    headerMode='none'
     screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
  >
    <RootStack.Screen name="AuthScreen" component={AuthScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    <RootStack.Screen name="SignupSellerScreen" component={SignupSellerScreen} />
  </RootStack.Navigator>
)

export default RootStackScreen
