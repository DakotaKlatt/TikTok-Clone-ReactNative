
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import SwiperComponent from './Components/SwiperComponent';
import BottomNavigationBar from './Components/BottomNavigationBar';


export default function App() {


  return (
    <View style={styles.container}>
     <SwiperComponent/>
     <BottomNavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
