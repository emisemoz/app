import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import {React, useState, useEffect} from 'react'
import {movieData} from './data/MovieData'
import { ShowMovie } from './components/MovieComponent'

const HomeScreen = () => {
const [recommended, setRecommended] = useState([]); 
const [Viewed, setMostViewed,] = useState([]); 
    const compareRating = (a, b) =>{
        const ratingA= a.rating;
        const ratingB= b.rating;
        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else{
            return 0;
        }
    };
    const compareViewers=(a, b) =>{
        const compareA = a.viewers;
        const compareB= b.viewers;
        if (compareA > compareB) {
            return -1;
        } else if (compareA < compareB) {
            return 1;
        } else{
            return 0;
        }
    }
    useEffect ( () =>{
        const sortedRecommended = [...movieData].sort(compareRating);
        setRecommended(sortedRecommended);        
        const sortedViewed = [...movieData].sort(compareViewers);
        setMostViewed(sortedViewed);
    }, []);
return (
    <View style={styles.mainContainer}>
    <FlatList 
    data={recommended}
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
            
            {
                item.rating===5?
                <Image 
                style={styles.itemrates}
                source={require("../../assets/images/five-stars.png")}
                />
            :
            item.rating===4?
                <Image 
                style={styles.itemrates}
                source={require("../../assets/images/four-stars.png")}
                />
            :
            item.rating===3?
                <Image 
                style={styles.itemrates}
                source={require("../../assets/images/three-stars.png")}
                />
            :
            item.rating===2?
                <Image 
                style={styles.itemrates}
                source={require("../../assets/images/two-stars.png")}
                />
            :
            item.rating===1?
                <Image 
                style={styles.itemrates}
                source={require("../../assets/images/star.png")}
                />
            :null
            }
        </View>
    </View>
        )
    }}
    ListHeaderComponent={
        <View>
                <View style={styles.mainCategoryContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryText}>
                            Most Viewed
                        </Text>
                    </View>
                </View>
            <FlatList 
            horizontal={true}
            data={Viewed}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) =>{
                return (
                    <ShowMovie 
                    image={item.imageLink}
                    title={item.title}
                    viewers={item.viewers}
                    />
                )
            }}
            />
            <View style={styles.mainCategoryContainer}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>
                        Recommended
                    </Text>
                </View>
            </View>
        </View>
    }
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
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection:'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemrates:{
        width: 100,
        height: 20
    },
})
export default HomeScreen