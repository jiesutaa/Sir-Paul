import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// Code example by Dr. Fuentes; May 21, 2023

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.pinkvilla.com/images/2024-07/769804251_alya-sometimes-hides-her-feelings-in-russian-episode-2-alya-1.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Hello, World!</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: 'https://img.anime2you.de/2024/05/alya.jpg' }} // Replace with your own image URL
            style={styles.image}
          />
          <Text style={styles.text}>Your Name!</Text>
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
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});