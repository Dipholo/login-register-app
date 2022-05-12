import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Pressable, TouchableOpacity, ImageBackground} from 'react-native';
import SignUpScreen from './SignUpScreen';

const LogInScreen = () => {
    
    return (
            <View style={styles.container}>
                
                <Text style={styles.text1}>Welcome</Text>

                <View style={{marginBottom: 20, marginTop: 10, backgroundColor: 'white', width: '80%'}}>
                <TextInput placeholder="Email"/></View>

                <View style={{marginTop: 15, backgroundColor: 'white', width: '80%'}}>
                <TextInput placeholder="Password" secureTextEntry={true}/></View>

                <View style={{alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start',marginLeft: 35, marginTop: 5 }}>
                <TouchableOpacity>
                <Text style={{fontSize: 10,letterSpacing: 1,color: 'blue',}}>Forgot Password?</Text></TouchableOpacity></View>

                <Pressable style={styles.button}>
                <Text style={{fontSize: 15,fontWeight: 'bold',letterSpacing: 1,color: 'white',}}>Log In</Text>
                </Pressable>
                <Text style={{fontSize: 13, color: 'white', marginTop: 60}}>Not Registered?</Text>

                <TouchableOpacity onPress={SignUpScreen}>
                <View style={{alignContent: 'center',alignItems: 'center', backgroundColor: 'green', height: 25, width: 110, marginTop: 3, borderRadius: 40}}>
                <Text style={{fontSize: 15,color: 'white', }}>Sign Up</Text>
                </View>
                </TouchableOpacity>
                
            </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
   container:{
        justifyContent:"center",
        alignItems:"center",
        width: '100%',
        height: '100%'
    
      },
      text1:{
        fontSize:30,
        marginBottom:100,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 10
      },
      button: {
        width: '40%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 20,
        backgroundColor: 'blue',
      },
      bac:{
        flex: 1,
        height: '100%',
        width: '100%',
       
      }
})
