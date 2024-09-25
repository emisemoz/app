import { View, Text, Button } from 'react-native'
import React from 'react'

const FirstScreen = () => {
const openAlert = () => {
    alert("you clicked the button ! Now you shall perish.")
};
return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
    <Text>FirstScreen</Text>
    <Button title="this si button" onPress={openAlert}/>
    </View>
);
};

export default FirstScreen