import React from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import App from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc, addDoc, getFirestore } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/core';
import { getDatabase, ref, set } from "firebase/database";
// import { TextInput } from 'react-native-gesture-handler';
// blue color: #0782F9

// change "navigate" to "replace" to remove go back 
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()
    const auth = getAuth();
    //const db = getFirestore(App);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
        return unsubscribe
    }, [])

    

    const handleSignUp = async() => {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(async userCredentials => {
            const user = userCredentials.user;
            const userId = userCredentials.user.uid;
            set(ref(db, 'users/' + userId), {
                SnapChat: "",
                Instagram: "",
                TikTok: "",
                Facebook: "",
                Reddit: "",
                Twitter: "",
              });
        //db.collection("users").doc(doc.id).update({foo: "bar"});
        
          console.log('Registered with:', user.email);
        }).catch(error => alert(error.message))

        // const userRef = collection(db, "users");
        //     console.log("hello")
        //     await setDoc(doc(userRef, "userId"), {
        //         qrString: "test",
        //         instagram: "test"
        //     });
    }

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding" 
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                    >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}



export default LoginScreen


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
        width: '100%',
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