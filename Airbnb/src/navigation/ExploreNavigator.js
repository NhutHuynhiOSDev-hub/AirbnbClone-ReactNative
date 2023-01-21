import HomeScreen from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createNativeStackNavigator();

const ExploreNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;