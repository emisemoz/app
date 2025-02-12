import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
import AddProductScreen from '../screens/AddProductScreen'

const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();

const DrawerNav = () => {
return (
    <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen 
        name="Home"
        component={HomeScreen}
        options={{
            title: 'Daily Fashion',
            headerStyle: {
                backgroundColor: '#D1E5C2'
            },
            headerTitleAlign: 'center',
            drawerIcon: config => 
            <Icon 
            name="home"
            type= "antdesign"
            />
        }}
        />
        <Drawer.Screen 
        name="AddProduct"
        component={AddProductScreen}
        options={{
            title: 'Add Product',
            headerStyle: {
                backgroundColor: '#D1E5C2'
            },
            headerTitleAlign: 'center',
            drawerIcon: config => 
            <Icon 
            name="plus"
            type= "antdesign"
            />
        }}
        />
    </Drawer.Navigator>
)
}

export default DrawerNav