import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

function SearchResultsScreen() {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}

export default SearchResultsScreen;
