import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import destination_feed from '../../../assets/data/destination_feed';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

function DestinationsSearchScreen() {
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
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default DestinationsSearchScreen;
