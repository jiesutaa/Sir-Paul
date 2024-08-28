import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
export default class App extends Component {
  render(){ 
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image
        source={{ uri: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/454847871_3239235469543030_5159156331981345643_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF7kwCYfaNFY1a6UFbcIZG5WyQVr1D3KXdbJBWvUPcpd6kyb8UWNGehmGn3unj1TffFVL9DOzFcWQwY2qHlOd0W&_nc_ohc=a-W1vZ-DBwoQ7kNvgGz3ClI&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYCfCKFanmGldMqP2mKsH8-KqTJrXkvc_FJkK6rz6XJP0Q&oe=66D44B8B'}}
        style={{ width: 200, height: 200 }}
        />
        <Text style={styles.text}>Jhester Aquino</Text>
        <Text style={styles.text}>BSIT</Text>
        <Text style={styles.text}>3rd year</Text>
      </View>
      <View style={styles.container}>
      <Image
        source={{ uri: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/454847871_3239235469543030_5159156331981345643_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF7kwCYfaNFY1a6UFbcIZG5WyQVr1D3KXdbJBWvUPcpd6kyb8UWNGehmGn3unj1TffFVL9DOzFcWQwY2qHlOd0W&_nc_ohc=a-W1vZ-DBwoQ7kNvgGz3ClI&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYCfCKFanmGldMqP2mKsH8-KqTJrXkvc_FJkK6rz6XJP0Q&oe=66D44B8B' }}
        style={{ width: 200, height: 200 }}
        />
        <Text style={styles.text}>Welcome to my app!</Text>
        </View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
text: {
fontSize: 24,
color:'blue',
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 10,
},
});