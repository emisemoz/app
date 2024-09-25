import React from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Touchable } from 'react-native'

const SolarSystemScreen = () => {
return (
    <View style={{flex: 1}}>
    <View style={{
        alignItems:'center',
        padding: 16
    }}>
    <Text style={{
        fontSize: 30,
        fontFamily:'serif',
        textDecorationLine:'underline'
    }}>
    SOLAR SYSTEM</Text>
    </View>
    <ScrollView>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/mercury.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Mercury </Text>
        <Text>Mercury is the fastest planet, zipping around the sun
every 88 earth days</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/venus.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Venus</Text>
        <Text>Venus spins slowly in the opposite direction from most
planets</Text>
    </View>
    </View>  
    </TouchableOpacity>
    <TouchableOpacity> 
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/earth.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Earth</Text>
        <Text>Earth is the only place we know of so far thats inhabited
by living things</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/mars.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Mars </Text>
        <Text>Mars is a dusty, cold, desert world with a very thin
atmosphere</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/jupiter.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}>Jupiter</Text>
        <Text>Jupiter is more than twice as massive than the other
planets of our solar system combined</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/saturn.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Saturn </Text>
        <Text>Adorned with a dazzling, complex system of icy rings,
Saturn is unique in our solar system</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/uranus.png")}/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}>Uranus</Text>
        <Text>Uranus rotates at a nearly 90-degree angle from the
plane of its orbit</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:'row',
        backgroundColor:'Wheat',
        margin: 16,
        padding: 16,
        borderRadius: 20,
        borderColor:'green',
        borderWidth: 1
    }}>
    <Image style={{
        height: 100,
        width: 100
    }} source={require ("../../assets/images/neptune.png")}
/>
    <View style={{
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        justifyContent:'center'
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold'
        }}> Neptune</Text>
        <Text>Neptune is dark, cold, and whipped by supersonic winds</Text>
    </View>
    </View>
    </TouchableOpacity>
    </ScrollView>
    </View>
)
}

export default SolarSystemScreen;