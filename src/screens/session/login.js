import React, { useState } from 'react'
import { View, StyleSheet,Text, TextInput, ImageBackground, Image } from 'react-native';
import { Colors,Metrics, Images } from '../../themes'
import * as Animatable from 'react-native-animatable';
import { Button, IconButton } from 'react-native-paper';
import {AuthContext} from '../../context'

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState(null)
  const textInputChange = (val) => {
    setPhone(val)
  }
  const { signIn } = React.useContext(AuthContext)

  return (
     <ImageBackground source={Images.loginBackgroundScreen} style={{
        flex: 1,
        resizeMode: "cover",
      }}>
      <View style={{ flex: 2.5}}>
          <Animatable.View
            animation="fadeIn"
          >
            <IconButton
                icon="arrow-left"
                color="#A17A1F"
                style={{ backgroundColor: '#FFF'}}
                size={25}
                onPress={() => navigation.goBack()}
              />
          </Animatable.View>
      </View>
      <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <Text style={styles.textFooter}>Login</Text>
        <View style={{ marginTop: 40 }}>
          <View style={styles.action}>
            <View style={{flexDirection: 'row',borderRightWidth:2, height: 50, alignItems: 'center', borderRightColor: '#A17A1F', paddingRight: 12 }}>
              <Text style={{ color: '#A17A1F', paddingRight: 10}}>ID</Text>
              <Text  style={{ color: '#A17A1F'}}>+62</Text>
            </View>
             <TextInput
                value={phone}
                keyboardType="number-pad"
                placeholder="Phone Number"
                style={styles.textInput}
                onChangeText={(val) => textInputChange(val)}
              />
          </View>
           <Button 
              mode="contained"
              onPress={signIn }
              style={{ marginTop: 20, borderRadius: 20 }}
            >
              Login
            </Button>
        </View>
      </Animatable.View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 1,
        backgroundColor: '#F4F2FE',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        fontFamily: 'LatoRegular',
        color: '#A17A1F',
        fontSize: 34,
        textAlign: 'center',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 16,
        padding: 9,
        alignItems: 'center',
        borderColor: '#CBAE60',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });


export default LoginScreen