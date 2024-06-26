import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import SwipePicture from '../components/SwipePicture'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function SwipeScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')
  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })()
    }
  
    // Request Camera Permission
    useEffect(() => {
      askForCameraPermission();
    }, []);
  
    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setText(data)
      console.log('Type: ' + type + '\nData: ' + data)
    };
  
    // Check permissions and return the screens
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text>Requesting for camera permission</Text>
        </View>)
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View>)
    }
  
    // Return the View
    return (
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject} />
        </View>
        <Text style={styles.maintext}>{text}</Text>
  
        {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
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
    maintext: {
      fontSize: 16,
      margin: 10,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 700,
      width: 800,
      overflow: 'hidden',
      borderRadius: 10,
      
      
    }
  });



