import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';


function SwipePicture( profile ) {
    return (
        <View>
            <Image source={{ uri: profile.picture }} style={styles.photo} />
            <View style={styles.textContainer}>
            <View style={styles.textRow}> 
                <Text style={styles.textPrimary}>{profile.name}</Text>
                <Text style={styles.textPrimary}>{profile.age}</Text>
            </View>
            </View>
        </View>
    )
}

export default SwipePicture

const styles = StyleSheet.create({
    photo: {
        height: 600,
        
        resizeMode: 'cover',
        borderRadius: 80,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10

    },
    textContainer:{
        position:'absolute',
        bottom: 70,
        left: 30,
    },
    textRow: {

        flexDirection:'row',
        alignItems:'center',


    },
    textPrimary: {
        color: 'white',
        fontSize: 35,

    },
    textSecondary:{
        color: 'white',
        fontSize: 25,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    }
  });