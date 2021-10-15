import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import SwipePicture from '../components/SwipePicture'

function SwipeScreen() {
    return (
        <View>
           <SwipePicture name ="Sydney" age='19' picture="https://www.justataste.com/wp-content/uploads/2011/06/strawberry-margarita-popsicles.jpg" />
        </View>
    )
}

export default SwipeScreen

