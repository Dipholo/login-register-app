import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Component } from 'react';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import { useState } from 'react';
import { ImageBackground } from 'react-native';




export default function App() {
  const [SignedUp, setSignedUp]=useState(false);
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.bac} source={require('./assets/bac.webp')}>
    {SignedUp? <LogInScreen/>:<SignUpScreen setSignedUp={setSignedUp}/>}
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bac:{
    flex: 1,
    height: '100%',
    width: '100%',
   
  }
});
