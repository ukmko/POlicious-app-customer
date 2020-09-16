/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import NavigationRouter from './router'
import AuthStackScreen from './navigate/auth-stack-container'
import TabStackScreen from './navigate/tab-stack-navigate'
import TabSellerStackScreen from './navigate/seller-tab-stack-navigate'
import {AuthContext} from './context'

const App  = () => {
  const [user, setUser] = useState()
   const authContext = React.useMemo(() => ({
    signIn: () => {
      setUser('fdsds')
    },
    signOut: () => {
      setUser(null)
    },
   }))
  return (
    <>
      <StatusBar backgroundColor="#CBAE60" barStyle="light-content" />
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {user ? <TabSellerStackScreen /> : <AuthStackScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
