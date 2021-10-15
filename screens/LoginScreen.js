import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

// change "navigate" to "replace" to remove go back 
function LoginScreen({navigation}) {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Home page" onPress={() => navigation.navigate("Home")}/> 
        </View>
    )
}

export default LoginScreen
