import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import ImageCropPicker from 'react-native-image-crop-picker'
import { InputComponent } from '../SRC/components/InputComponent';
import SelectDropdown from 'react-native-select-dropdown';
import { categoryList } from '../../data/Data';
import realm from '../Store/realm';
import { ProductFilled } from '@ant-design/icons';

const AddProductScreen = () => {
  const saveData = () => {
    if (productData.productName === '' || String){
      alert('Please fill all your product information!');
    } else if (productData.phoneNumber === '' && String){
      alert('Please fill at least one seller contact!');
    } else {
      const allData = realm.objects('Product');
      const lastId= 
      allData.length === 0 ?
      0
      :
      allData[allData.length - 1].id;

      realm.create()('Product', {
        id: lastId + 1,
        productName: productData.productName,
        imagePath: productData.imagePath,
        category: productData.category,
        description: productData.description,
        price: productData.price,
        instagram: productData.instagram,
        facebook: productData.facebook,
        phoneNumber: productData.phoneNumber
      });
    };
  };
  const [productData, setProductData] = useState ({
    productName :'',
    imagePath: '',
    category: null,
    description: '',
    price: null,
    instagram: '',
    facebook: '',
    phoneNumber: '',
  });
  const AddImage = () => {
    ImagePicker.openPicker({
      width: 2000,
      height: 2000,
      cropping: true
    }).then(image =>{
      console.log(image)
      setProductData({
        ...productData,
        imagePath: image.path
      });
    }).catch(errorMessage => {
      console.log(errorMessage);
    });
  };
  const onInputChange= (type, value) => {
    setProductData({
      ...productData,
      [type] : value
    });
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageContainer}>
          <TouchableOpacity 
          styles={styles.imageButton}
          onPress={ () => AddImage()}
          >
            <Image
            style={{ 
              width: productData.imagePath !== '' ? 200:50,
              height: productData.imagePath !== '' ? 200:50
            }}
            source={{
              uri: productData.imagePath !== '' ?
              productData.imagePath
              :
              'https://assets/webiconspng.com/uploads/2017/02/'
            }}
            />
            <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Product Name'
              value= {productData.productName}
              onChangeText={(text) =>
              onInputChange ('productName', text)}
              />
            </View>
            <SelectDropdown
            data={categoryList}
            defaultButtonText='Select category'
            onSelect={(item) =>{
              onInputChange('category', item.id)
            }}
            buttonTextAfterSelection={(item) =>{
              return item.name
            }}
            rowTextForSelection-={(item) => {
              return item.name
            }}
            buttonStyle={styles.SelectDropdown}
            buttonTextStyle={styles.selectText}
            />
            <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Description'
              value= {productData.description}
              onChangeText={(text) =>
              onInputChange ('description', text)}
              isDescription={true}
              />
              <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Price'
              value= {productData.price}
              onChangeText={(text) =>
              onInputChange ('price', text)}
              isIcon={true}
              name="dollar"
              type="font-awesome"
              />
            </View>
            <Text style={styles.sellerText}> Seller Contact</Text>
            <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Whatsapp number (ex : +4498739230)'
              value= {productData.phoneNumber}
              onChangeText={(text) =>
              onInputChange ('phone number', text)}
              isIcon={true}
              name="whatsapp"
              type="font-awesome"
              />
            </View>
            <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Instagram user (ex : timedooracademy)'
              value= {productData.instagram}
              onChangeText={(text) =>
              onInputChange ('instagram user', text)}
              isIcon={true}
              name="instagram"
              type="font-awesome"
              />
            </View>
            <View style={styles.horizontalContainer}>
              <InputComponent
              placeholder= 'Facebook user (ex : timedooracademy)'
              value= {productData.facebook}
              onChangeText={(text) =>
              onInputChange ('facebook user', text)}
              isIcon={true}
              name="facebook-square"
              type="font-awesome"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={styles.saveButton}
                >
                  <Text style= {styles.saveText}> SAVE </Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  scroll: {
    margin: 8,
    paddingBottom: 8
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 8
  },
  imageButton: {
    width: 200,
    height: 200,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sellerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 0,
    color: 'black'
  },
  buttonContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  saveButton:{
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'mistyrose'
  },
  saveText: {
    color: 'black'
  },
  SelectDropdown: {
    borderRadius: 10,
    backgroundColor: 'skyblue',
    width: 150,
    height: 30,
    marginLeft : 8
  },
  selectText: {
    fontSize: 12
  }
});
export default AddProductScreen