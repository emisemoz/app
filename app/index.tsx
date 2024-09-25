import React from "react";
import 'react-native-gesture-handler'
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from './M11/navigator/MainNavigator';
//tewst
const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  );
};

export default App;