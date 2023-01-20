import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import destination_feed from '../../../assets/data/destination_feed';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function DestinationsSearchScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={destination_feed}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default DestinationsSearchScreen;
