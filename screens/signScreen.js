import React from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getAuth} from "firebase/auth";
import { useNavigation } from '@react-navigation/core';

function ProfileScreen() {
    const navigation = useNavigation()

    const auth = getAuth()

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>  
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
      inputContainer: {
          width: '80%'
      },
      input: {
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 5,
      },
      buttonContainer: {
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
      },
      button: {
          backgroundColor: '#b19cd9',
          width: '60%',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
      },
      buttonOutline:{
          backgroundColor: 'white',
          marginTop: 5,
          borderColor: '#b19cd9',
          borderWidth: 2,
      },
  
      buttonText: {
          color: 'white',
          fontWeight: '700',
          fontSize: 16,
      },
  
      buttonOutlineText: {
          color: '#b19cd9', 
          fontWeight: '700',
          fontSize: 16,
      },
  })