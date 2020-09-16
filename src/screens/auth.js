import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Button, TouchableRipple } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import { Colors, Metrics, Images } from '../themes'
import * as Animatable from 'react-native-animatable';

const AuthScreen = ({navigation}) => {
  return (
    <ImageBackground source={Images.loginBackground} style={{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      alignItems: "center",
    }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.View animation="fadeInDown" style={{ marginBottom: 280, alignItems: 'center' }}>
        <Image
          style={{ width: 160, height: 120, padding: 8 }}
          source={Images.largeLogo}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, backgroundColor:  Colors.white, borderRadius: 50, margin: 10 }}/>
          <Text style={{ fontFamily: 'LatoBold', color: Colors.white }}>
            FRESH FROM HOME
          </Text>
          <View style={{ width: 10, height: 10, backgroundColor:  Colors.white, borderRadius: 50, margin: 10 }}/>
        </View>
      </Animatable.View>
    </View>
    <View style={{ marginVertical: 24, width: '100%' }}>
      <Animatable.View  animation="fadeIn" style={{ flexDirection: 'row',}}>
        <Button 
          mode="contained"
          uppercase={false}
              labelStyle={{
          letterSpacing: 0,
          fontSize: 16,
          fontFamily: 'LatoRegular',
        }}
          style={{ flex: 1, margin: 12, borderRadius: 20 }}
          onPress={() => {
            navigation.navigate('SignupScreen')
          }}
        >
          Sign up
        </Button>
        <Button 
            labelStyle={{
          letterSpacing: 0,
          fontSize: 16,
          fontFamily: 'LatoRegular',
        }}
        onPress={() => {
            navigation.navigate('LoginScreen')
          }}
          uppercase={false}
         mode="contained" style={{ flex: 1, margin: 12, borderRadius: 20 }}>
          Login
        </Button>
      </Animatable.View>
      <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'LatoBold' }}>Daftar Sebagai Penjual?</Text>
        <TouchableRipple
          style={{marginLeft: 4}}
          onPress={() => {
            navigation.navigate('SignupSellerScreen')
          }}
        >
          <Text style={{ color: '#A17A1F', fontFamily: 'LatoBold' }}>
             Disini
          </Text>
        </TouchableRipple> 
      </View>
    </View>
    </ImageBackground>
  )
}

export default AuthScreen;