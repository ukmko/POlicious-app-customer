import React from 'react'
import { View, StyleSheet,Text, TextInput, ImageBackground, Image } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import {AuthContext} from '../../context'

const CartScreen = () => {
  const { signOut } = React.useContext(AuthContext)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        uppercase={false}
        onPress={signOut}
         labelStyle={{
          letterSpacing: 0,
          fontSize: 16,
          fontFamily: 'LatoRegular',
        }}
        style={{ letterSpacing: 0, fontFamily: 'LatoBold',marginTop: 20,  borderRadius: 20 }}
      >
          Logout
        </Button>
    </View>
  )
}

export default CartScreen