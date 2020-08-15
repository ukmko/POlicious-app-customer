/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';
import RootScreen from './root'
import { Colors, Metrics, Fonts } from './themes'

const fontConfig = {
  default: {
    regular: {
      fontFamily: Fonts.base,
      fontWeight: '400',
    },
    medium: {
      fontFamily: Fonts.emphasis,
      fontWeight: '500',
    },
    light: {
      fontFamily: Fonts.base,
      fontWeight: '300',
    },
    thin: {
      fontFamily: Fonts.base,
      fontWeight: '100',
    },
  },
}

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: Metrics.smallRadius,
  colors: {
    ...DefaultTheme.colors,
    primary: '#A17A1F',
    accent: Colors.accent,
    background: Colors.background,
    surface: Colors.white,
    error: Colors.red,
    text: Colors.darkGrey,
  },
  fonts: configureFonts(fontConfig),
}

const App: () => React$Node = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <RootScreen />
      </PaperProvider>
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
