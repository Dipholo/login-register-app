import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Pressable, TouchableOpacity} from 'react-native';
import LogInScreen from './LogInScreen';

const SignUpScreen = ({setSignedUp}) => {
    function handleLogin(){
        setSignedUp(true)
    }
    return ( 
        <View style={styles.container}>

        <Text style={styles.text1}>Welcome</Text>       
        

        <View style={{marginTop: 20, backgroundColor: 'white', width: '80%'}}>
        <TextInput placeholder="First Name"/></View>

        <View style={{marginTop: 20, backgroundColor: 'white', width: '80%'}}>
        <TextInput placeholder="Last Name"/></View>

        <View style={{marginTop: 20, backgroundColor: 'white', width: '80%'}}>
        <TextInput placeholder="Email"/></View>

        <View style={{marginTop: 20, backgroundColor: 'white', width: '80%'}}>
        <TextInput placeholder="Password" secureTextEntry={true}/></View>

        <View style={{marginTop: 20, backgroundColor: 'white', width: '80%'}}>
        <TextInput placeholder="Confirm Password" secureTextEntry={true}/></View>

        <Pressable style={styles.button}>
        <Text style={{fontSize: 16,fontWeight: 'bold',letterSpacing: 1,color: 'white',}}>Register</Text>
        </Pressable>
        <Text style={{fontSize: 13, color: 'white', marginTop: 60}}>Already have an account?</Text>

        <TouchableOpacity onPress={handleLogin}>
        <View style={{alignContent: 'center',alignItems: 'center', backgroundColor: 'blue', marginTop: 5, borderRadius: 40, height: 25, width: 100}}>
        <Text style={{fontSize: 15,color: 'white', }}>Log In</Text>
        </View>
        </TouchableOpacity>

        </View>
        
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
    
      },
      text1:{
        fontSize:24,
        marginBottom:5,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 10,
        marginBottom: 100
      },
      button: {
        width: '40%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 30,
        backgroundColor: '#263238',
      },
})
