import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import {movieData} from './data/MovieData'

const HomeScreen = () => {
return (
    <View style={styles.mainContainer}>
    <FlatList 
    data={movieData}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.flatListContainer}
    renderItem={ ({ item}) => {
        return (
            <View style={styles.dataContainer}>
                <Image style={styles.movieImage}
                source={{uri: item.imageLink}}
                />
            <View style={styles.movieDescriptionContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.yearContainer}>
            <Text> {item.year}</Text>
            </View>
            <Text>{item.rating}</Text>
        </View>
    </View>
        )
    }}
    />
    </View>
)
}
const styles= StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer:{
        padding: 8
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    } ,
    dataContainer:{
        margin: 8,
        padding: 16,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8,
    },
    yearContainer: {
        marginTop: 8,
        marginBottom: 8,
    },
})
export default HomeScreen