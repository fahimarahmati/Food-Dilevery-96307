import React from 'react';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import ProfileItems from '../Components/ProfileItems'

export default function Profile () {    
    return (
      <View style={styles.container}>
          <Image
            style={{height:200}}
            source={{uri:require('../assets/1.jpg')}}
          />
          <ProfileItems name="username" value="Fahima Rahmati"/>
          <ProfileItems name="Gmail" value="Fahimarahmati1999@gmail.com"/>
          <ProfileItems name="Gender" value="Famale"/>
          <ProfileItems name="Mobile" value="0790982009"/>
          <ProfileItems name="Address" value="Herat-Afghanistan"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1
    }
});