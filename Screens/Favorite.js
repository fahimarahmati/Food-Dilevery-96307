import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
 import FavoriteItems from '../Components/FavriteItems'

export default function Favorite() {
    
    const foods=[
      {id:"1",image: require("../assets/1.jpg"),  name:"Burger", price:"10$",detail:"very deleciouse food kjhfkljfkdjowIOJAF"},
      {id:"2",image: require("../assets/2.jpg"),  name:"Pizza", price:"20$",image: require("../assets/2.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFfjeoiiergoiergujiojkjiojkfnkfsjierojgosj"},
      {id:"3",image: require("../assets/3.jpg"),  name:"Spaghetti",price:"30$",image: require("../assets/3.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFhrjfhiusgiuijfkhgtuifjkiughuiriousjkhfkjs"},
      {id:"4",image: require("../assets/4.jpg"),  name:"rice", price:"40$",image: require("../assets/4.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFhauiyferyjsdhhruieyiu kafkkadkjkjadkljherjffffffffdhajkhiaeufuidhjkhaghriufhjkahuiarehfiuahjkfhfuhraiufhdkjaihui"},
      {id:"5",image: require("../assets/5.jpg"),  name:"bread", price:"50$",image: require("../assets/5.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFreuuighuiytruihfkjhiughtruiwrihjhjkfiueiusjkhsjki"},
      {id:"6",image: require("../assets/6.jpg"),  name:"cookies", price:"60$",image: require("../assets/6.jpg"), detail:"very deleciouse food kjhfkljfkdjowIOJAFrejkfvuiifkajdfkaiuerijfkljfkjoieufiejfkjkju"}
    ]
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({item})=>{
            return <FavoriteItems name={item.name} image={item.image} price={item.price}/>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
