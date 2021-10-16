import React from 'react'
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { Card, ListItem, Icon, Avatar } from 'react-native-elements'




function MessageScreen() {

    const urlImage =
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

  const list = [
    {
      name: 'Instagram',
      avatar_url: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png',
      subtitle: 'UserName'
    },
    {
      name: 'SnapChat',
      avatar_url: 'https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-2013-2019.png',
      subtitle: 'UserName'
    },
    {
        name: 'TikTok',
        avatar_url: 'https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_1080.png',
        subtitle: 'UserName'
      },
      {
        name: 'Facebook',
        avatar_url: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
        subtitle: 'UserName'
      },
      {
        name: 'Redit',
        avatar_url: 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2',
        subtitle: 'UserName'
      },
      {
        name: 'Twitter',
        avatar_url: 'https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png',
        subtitle: 'UserName'
      }
  ]  

  const current = x => x;

  const createTwoButtonAlert = (app) => {
    Alert.prompt(
        'Enter Username',
        '',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Submit', onPress: username => console.log({username , app})},
        ],
        'plain-text',
      );
    }
    

  function returnList(userQR) {

    const profiles = []


    return profiles;   // The function returns the product of p1 and p2
  }



    return (
        <View>
            

            {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                
                </ListItem.Content>
                <Button
                        style={styles.fixToText}
                        title="add"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={() => createTwoButtonAlert(l.name)}
                    />
            </ListItem>
            ))
  }
        </View>
    )
}

const styles = StyleSheet.create({
    fixToText: {
        position: 'absolute',
        left: 120,
      },
});


export default MessageScreen
