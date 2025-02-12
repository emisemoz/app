import React from "react";
import 'react-native-gesture-handler'
import { SafeAreaProvider } from "react-native-safe-area-context";
import FourthScreen from "./M4/FourthScreen";
import DrawerNav from "./Drawer Navigation/M3/navigator/MainNavigator";
//tewst
const App = () => {
  return (
    <SafeAreaProvider>
      <DrawerNav/>
    </SafeAreaProvider>
  );
};

export default App;