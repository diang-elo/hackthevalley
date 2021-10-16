import React from 'react'
import SwipePicture from '../components/SwipePicture'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function SwipeScreen() {
    return (
        <View>
            <SwipePicture name="Sydney" age='19' picture="https://www.justataste.com/wp-content/uploads/2011/06/strawberry-margarita-popsicles.jpg" />
        </View>  
    )
}

export default SwipeScreen

