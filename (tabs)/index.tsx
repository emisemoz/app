import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNav from '../app/Drawer Navigation/M1/SRC/navigator/MainNavigator';
import HomeScreen from '@/app/Drawer Navigation/M1/SRC/screens/HomeScreen';

const App = () => {
return (
    <SafeAreaProvider>
        <HomeScreen/>
    </SafeAreaProvider>
)
}

export default App