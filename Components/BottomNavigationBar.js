import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Dimensions,Image} from 'react-native'

import { TouchableOpacity } from 'react-native'

import Swiper from 'react-native-swiper'


export default class BottomNavigationBar extends Component {
  render() {
    return (
        <View style={{height:Dimensions.get("window").height/10,width:Dimensions.get("window").width,justifyContent:'space-evenly' ,flexDirection:'row'}}>
            <TouchableOpacity><Image source={require('../assets/home.png')} style={{resizeMode:'stretch',height:Dimensions.get("window").height/15,width:Dimensions.get("window").width/15,flexDirection:'row'}} ></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/search.png')} style={{resizeMode:'stretch',height:Dimensions.get("window").height/15,width:Dimensions.get("window").width/15,flexDirection:'row'}} ></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/plus.png')} style={{resizeMode:'stretch',height:Dimensions.get("window").height/15,width:Dimensions.get("window").width/15,flexDirection:'row'}} ></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/mail.png')} style={{resizeMode:'stretch',height:Dimensions.get("window").height/15,width:Dimensions.get("window").width/15,flexDirection:'row'}} ></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('../assets/person.png')} style={{resizeMode:'stretch',height:Dimensions.get("window").height/15,width:Dimensions.get("window").width/15,flexDirection:'row'}} ></Image></TouchableOpacity>
        </View>
    )
  }
}

AppRegistry.registerComponent('TikTop-Clone-ReactNative', () => BottomNavigationBar)