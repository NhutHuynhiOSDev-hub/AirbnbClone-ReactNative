import React, {useState} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

function DestinationsSearchScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        style={{textInput: styles.textInput}}
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(`Here: ${data}`, details);
          navigation.navigate('Guests');
        }}
        onFail={error => console.log('On Fail', error)}
        onNotFound={() => console.log('no results')}
        query={{
          key: Config.GOOGLE_PLACE_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
}

export default DestinationsSearchScreen;
