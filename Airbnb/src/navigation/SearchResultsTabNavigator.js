import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  const [posts, setPosts] = useState([]);

  const route = useRoute();

  useEffect(() => {
    // const fetchPosts = async () => {
    //   try {
    //     const postsResult = await API.graphql(
    //       graphqlOperation(listPosts, {
    //         filter: {
    //           and: {
    //             maxGuests: {
    //               ge: guests,
    //             },
    //             latitude: {
    //               between: [viewport.southwest.lat, viewport.northeast.lat],
    //             },
    //             longitude: {
    //               between: [viewport.southwest.lng, viewport.northeast.lng],
    //             },
    //           },
    //         },
    //       }),
    //     );
    //     setPosts(postsResult.data.listPosts.items);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchPosts();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'}>{() => <SearchResults />}</Tab.Screen>
      <Tab.Screen name={'map'}>{() => <SearchResults />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
