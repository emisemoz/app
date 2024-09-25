import { View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import React from 'react'
import {InputComponent} from './Component/InputComponent'

const FourthScreen = () => {
  return (
    <View style={{margin:16}}>
        <ScrollView>
        <ImageBackground
        style={{
            width: '100%' ,
            height: 300 ,
            justifyContent: 'flex-end' ,
            alignItems: 'center' ,
        }}
        imageStyle={{borderRadius: 10}}
        source={{uri:'https://wallpaperaccess.com/full/250180.jpg'}}>
            <Text style={{
        backgroundColor: 'mistyrose' ,
        padding: 8 , 
        margin: 8,
        fontSize: 18,
        fontWeight: 'bold' ,
      }}> Disneyland</Text>
        </ImageBackground>
        <InputComponent 
        title="Description"
        height= {40}
        placeholder="About the place"
        multiline={true}
        keyboardType="default"
        />
            <InputComponent 
        title="Phone Number"
        height= {40}
        placeholder="Phone Number"
        multiline={true}
        keyboardType="numeric"
        />
        <InputComponent 
        title="Location"
        height= {40}
        placeholder="Location"
        multiline={true}
        keyboardType="default"
        />
    </ScrollView>
    </View>
)
};

export default FourthScreen 