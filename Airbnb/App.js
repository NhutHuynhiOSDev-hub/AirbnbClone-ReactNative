/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
