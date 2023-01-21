import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

function GuestsScreen() {
  const [audults, setAudults] = useState(0);
  const [infrants, setInfrants] = useState(0);
  const [childrents, setChildrents] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.subTitle}>Age 13 or above</Text>
          </View>
          <View style={styles.adjustContainer}>
            <Pressable
              onPress={() => setAudults(Math.max(0, audults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.adjustText}>{audults}</Text>
            <Pressable
              onPress={() => setAudults(audults + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.title}>Childrents</Text>
            <Text style={styles.subTitle}>Age 2 - 12</Text>
          </View>
          <View style={styles.adjustContainer}>
            <Pressable
              onPress={() => setChildrents(Math.max(0, childrents - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.adjustText}>{childrents}</Text>
            <Pressable
              onPress={() => setChildrents(childrents + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.title}>Infrants</Text>
            <Text style={styles.subTitle}>Under 2</Text>
          </View>
          <View style={styles.adjustContainer}>
            <Pressable
              onPress={() => setInfrants(Math.max(0, infrants - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>

            <Text style={styles.adjustText}>{infrants}</Text>
            <Pressable
              onPress={() => setInfrants(infrants + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          });
        }}
        style={styles.searchBtn}>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>
    </View>
  );
}

export default GuestsScreen;
