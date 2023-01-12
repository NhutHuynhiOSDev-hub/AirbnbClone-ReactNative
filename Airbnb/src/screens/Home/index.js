import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View>
      <Pressable
        style={styles.searchBtn}
        onPress={() => console.log('Search Btn On Press')}>
        <FontAwesome name="search" size={25} color="#f15454" />
        <Text style={styles.searchBtnText}>Where are you going</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.btn} onPress={() => console.log('On Press')}>
          <Text style={styles.btnText}>Explor nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;