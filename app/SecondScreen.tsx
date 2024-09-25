import { View, Text } from 'react-native'
import React from 'react'

const SecondScreen = () => {
return (
    <View style={{flex:1 ,justifyContent:"center", alignItems:"center", backgroundColor:'lavender'}}>
            <View style={{backgroundColor:'skyblue' , padding:15, margin:30, borderStyle:"solid", borderRadius:9, borderWidth:2}}>
                <Text style={{textAlign:"center"}}> 
                    Mobile Legends 
                </Text>
                <Text>
                Mobile Legends is a multiplayer online battle arena (MOBA) game. The two
opposing teams fight to reach and destroy the enemy’s base while defending
their own base for control of a path.
                </Text>
            </View>
            <View style={{backgroundColor:'babypink', padding:15, margin:30, borderStyle:"dotted", borderRadius:9, borderWidth:2}}>
                <Text style={{textAlign:"center"}}>
                PUBG
                </Text>
                <Text>
                PlayerUnknown’s Battlegrounds, better known as PUBG, is a multiplayer battle royale
game in which players drop onto an island and fight to be the last one left standing.
                </Text>
            </View>
    </View>
)
};

export default SecondScreen;