// import { View, Text } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NoteListScreen from '../screens/NoteListScreen';

// const Stack = createStackNavigator();

// export const MainNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName='NoteList'>
//                 <Stack.Screen
//                     name='NoteList'
//                     component={NoteListScreen}
//                     options={{
//                         headerShown: false
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     ); 
// };


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoteListScreen from '../screens/NoteListScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="NoteList">
            <Stack.Screen
                name="NoteList"
                component={NoteListScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
