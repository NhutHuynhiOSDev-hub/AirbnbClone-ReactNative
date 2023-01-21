import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationsSearchScreen from '../screens/Destinations';
import GuestsScreen from '../screens/Guests/Index';
import PostScreen from '../screens/Posts/Index';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationsSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            title: 'Accommodation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
