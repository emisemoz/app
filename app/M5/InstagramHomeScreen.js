import { View, Text, ScrollView} from 'react-native';
import {Feed} from './InstagramComponent';
import React from 'react'
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
const InstagramHomeScreen = () => {
    const [fontsLoaded] = useFonts({
        "StyleScript-Regular": require("../../assets/fonts/StyleScript-Regular.ttf"),
});
return (
    <View style={{flex: 1}}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text 
            style={{
                fontFamily: 'StyleScript-Regular',
                fontSize: 40,
                marginLeft: 16
            }}>
                Instagram 
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 8
            }}>
                <View style={{
                    marginRight: 8 ,
                    flexDirection: 'row' ,
                }}>
                <View style={{
                    marginRight: 8
                }}> 
                <Icon name='plus-square-o'
                    type='font-awesome' 
                    size= {26}
                    />
                </View>
                <View style={{
                    marginRight: 8
                }}>
                <Icon name='heart-o'
                    type='font-awesome' 
                    size= {26}
                    />
                </View>
                <View>
                <Icon name='paper-plane-outline'
                    type='ionicon' 
                    size= {26}
                    />
                </View>
                </View>
            </View>
        </View>
        <ScrollView>
        <Feed
profile={require("../../assets/images/pikachu.png")}
username={"buildurluve"}
post={{uri:"https://wallpaperaccess.com/full/201215.jpg"}}
/>
<Feed
profile={require("../../assets/images/profilePicture1.png")}
username={"fourthzx"}
post={{uri:"https://images4.alphacoders.com/292/292026.jpg"}} 
/>
<Feed profile={require("../../assets/images/profilePicture2.png")}
username={"fioooxns"}
post={{uri:"https://wallpaperaccess.com/full/496881.jpg"}} 
/>
<Feed profile={require("../../assets/images/profilePicture3.png")} 
    username={"mainaaee"}
    post={{uri:"https://images5.alphacoders.com/316/316297.jpg"}}
/>
<Feed profile={require("../../assets/images/profilePicture4.png")} 
    username={"raphliong"}
    post={{uri:"https://wallpaperaccess.com/full/1403923.jpg"}}
/>
        </ScrollView>
    </View>
)
};

export default InstagramHomeScreen