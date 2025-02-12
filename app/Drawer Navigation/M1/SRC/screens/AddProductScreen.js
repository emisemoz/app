import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
// import ImageCropPicker from 'react-native-image-crop-picker'

const AddProductScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageContainer}>
          <TouchableOpacity 
          styles={styles.imageButton}
          onPress={ () => AddImage()}
          >
            <Image
            style={{ width: 50, height: 50}}
            source={{
              uri: 'https://assets/webiconspng.com/uploads/2017/02/'
            }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({

});
export default AddProductScreen