import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import FoodItems from "../Components/FoodItems"

export default function Home() {
    let images=[
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
    ]
    const foods=[
      {id:"1",image: require("../assets/1.jpg"),  name:"Burger", price:"10$",detail:"very deleciouse food kjhfkljfkdjowIOJAF"},
      {id:"2",image: require("../assets/2.jpg"),  name:"Pizza", price:"20$",image: require("../assets/2.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFfjeoiiergoiergujiojkjiojkfnkfsjierojgosj"},
      {id:"3",image: require("../assets/3.jpg"),  name:"Spaghetti",price:"30$",image: require("../assets/3.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFhrjfhiusgiuijfkhgtuifjkiughuiriousjkhfkjs"},
      {id:"4",image: require("../assets/4.jpg"),  name:"rice", price:"40$",image: require("../assets/4.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFhauiyferyjsdhhruieyiu kafkkadkjkjadkljherjffffffffdhajkhiaeufuidhjkhaghriufhjkahuiarehfiuahjkfhfuhraiufhdkjaihui"},
      {id:"5",image: require("../assets/5.jpg"),  name:"bread", price:"50$",image: require("../assets/5.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFreuuighuiytruihfkjhiughtruiwrihjhjkfiueiusjkhsjki"},
      {id:"6",image: require("../assets/6.jpg"),  name:"cookies", price:"60$",image: require("../assets/6.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFrejkfvuiifkajdfkaiuerijfkljfkjoieufiejfkjkju"}
    ]
  return (
    <View style={{flex:1}}>
        <View style={styles.containerImageSlider}>
            <ImageSlider
            style={styles.imageSlider}
            images={images}
            autoPlayWithInterval={2000}
            />
        </View>
        <Text style={styles.text}>categories</Text>
        <FlatList
        numColumns={3}
          data={foods}
          renderItem={({item})=>{
            return <FoodItems name={item.name} price={item.price} image={item.image} detail={item.detail}/>
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    containerImageSlider: {
    height:170,
    margin:8
  },
  imageSlider:{
      borderRadius:10
  },
  text:{
    margin:10,
    fontSize:16,
    fontWeight:"bold"
  }
});
