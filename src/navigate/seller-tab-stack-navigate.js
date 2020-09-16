import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconFa from 'react-native-vector-icons/FontAwesome'
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons'

// import DetailsScreen from './DetailsScreen'
// import HomeScreen from './HomeScreen'
// import ProfileScreen from './ProfileScreen'
// import ExploreScreen from './ExploreScreen'
import CartScreen from '../screens/cart'
import HomeScreen from '../screens/seller/home'
import ProdukScreen from '../screens/seller/produk'
import AddProdukScreen from '../screens/seller/add-product'
import { Colors } from '../themes'
import styles from './styles'

const SellerStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
   <Tab.Navigator
      initialRouteName="homeScreen"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.darkSilver,
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color, focused }) => (
            <Icon color={color} name='home-sharp' size={26} style={[focused && styles.iconShadow, {paddingBottom: 4}]} />
            // <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProdukScreen"
        component={ProdukScreen}
        options={{
          tabBarLabel: 'Produk',
          tabBarColor: '#3d5afe',
          tabBarIcon: ({ color,focused }) => (
            // <Icon name="ios-notifications" color={color} size={26} />
            <Icon color={color} name='list' size={26} style={[focused && styles.iconShadow, {paddingBottom: 4}]}/>
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={CartScreen}
        options={{
          tabBarColor: '#ff4081',
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, focused }) => (
            // <Icon name="ios-person" color={color} size={26} />
            <IconMc color={color} name='history' size={26} style={[focused && styles.iconShadow, {paddingBottom: 4}]}/>
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={CartScreen}
        options={{
          tabBarColor: '#f9a825',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            // <Icon name="ios-aperture" color={color} size={26} />
            <IconMc color={color} name='account' size={26}  style={[focused && styles.iconShadow, {paddingBottom: 4}]}/>
          ),
        }}
      />
    </Tab.Navigator>
)

const HomeStackScreen = ({navigation}) => (
   <SellerStack.Navigator
      initialRouteName="homeScreen"
      headerMode='none'
    >
        <SellerStack.Screen
          name="RootSellerScreen"
          component={MainTabScreen}
        />
        <SellerStack.Screen
          name="AddProductScreen"
          component={AddProdukScreen}
        />
      </SellerStack.Navigator>
)


export default HomeStackScreen
