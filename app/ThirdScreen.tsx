import { View, Text, TextComponent, Image} from 'react-native'
import React from 'react'

const ThirdScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'mistyrose'}}>
        <View style={{flex: 1,backgroundColor:'red'}}>
      <Text style={{color:'white'}}>
        Pikachu
        </Text>
    </View>
    <View style={{flex: 1,backgroundColor:'orange'}}>
        <Text style={{color:'white'}}>
            Flareon
        </Text>
    </View>
    <View style={{backgroundColor:'yellow', flex: 1}}>
        <Text style={{color:'white'}}>
            Rapidash
        </Text>
    </View>
    </View>
  )
};
const AddImage = () => {
    return (
        <View>
            <View style={{margin: 8, padding: 8}}>
                <Image 
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }}
                source={require('../assets/images/pikachu.png')}
                />
            </View>
        </View>
    )
}

export default AddImage;