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
import { Colors } from '../themes'
import styles from './styles'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
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
        name="Profile"
        component={CartScreen}
        options={{
          tabBarColor: '#ff4081',
          tabBarLabel: 'Profile',
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

// const HomeStackScreen = ({navigation}) => (
//    <HomeStack.Navigator screenOptions={{
//           headerStyle: {
//             backgroundColor: '#009387'
//           },
//           headerTintColor: '#fff',
//           HeaderTitleStyle: {
//             fontWeight: 'bold',
//           },
//        }}>
//         <HomeStack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'overview',
//             headerLeft: () => (
//               <Icon.Button name="ios-menu" 
//                 size={25}
//                 backgroundColor="#009387"
//                 onPress={() => navigation.toggleDrawer()}
//               ></Icon.Button>
//             )
//             // headerStyle: {
//             //   backgroundColor: '#009387'
//             // },
//             // headerTintColor: '#fff',
//             // HeaderTitleStyle: {
//             //   fontWeight: 'bold',
//             // },
//           }}
//         />
//       </HomeStack.Navigator>
// )


// const DetailsStackScreen = ({navigation}) => (
//    <DetailsStack.Navigator screenOptions={{
//           headerStyle: {
//             backgroundColor: '#3d5afe'
//           },
//           headerTintColor: '#fff',
//           HeaderTitleStyle: {
//             fontWeight: 'bold',
//           },
//        }}>
//         <DetailsStack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{
//             title: 'Details',
//             headerLeft: () => (
//               <Icon.Button name="ios-menu" 
//                 size={25}
//                 backgroundColor="#3d5afe"
//                 onPress={() => navigation.toggleDrawer()}
//               ></Icon.Button>
//             )
//           }}
//         />
//       </DetailsStack.Navigator>
// )

export default MainTabScreen
