import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import  Sidebar  from './Sidebar';
import HomeScreen  from '../screens/HomeScreen';
import ShopListScreen from '../screens/ShopListScreen';
import ShopDataScreen from '../screens/ShopDataScreen';


export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            drawerIcon : <Icon name="home" type ="font-awesome" />,
            drawerLabel : "Home"
        }
    },
    Shop_List_Screen: {
        screen: ShopListScreen,
        navigationOptions: {
            drawerLabel : "Shopping List"
        }
    },
    Shop_Data_Screen: {
        screen: ShopDataScreen,
        navigationOptions:{
            drawerLabel : "Shopping Data"
        }
    },
    },
    {
        contentComponent: Sidebar
    },
    {
        initialRouteName: "Home"                                                              
    }
)
