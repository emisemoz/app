import { View, Text,StyleSheet } from 'react-native'
import React from 'react';

// import {SliderBox} from 'react-native-image-slider-box';
import {imageSlider} from '../../../data/Data';

const HomeScreen = () => {
  return (
    <View >
      {/* <SliderBox
      images={imageSlider}
      autoplay={true}
      circleLoop={true}
      sliderBoxHeight={250}
      /> */}
      <Text>testing</Text>

    </View>
  );
}

const styles=StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  }
});


export default HomeScreen
