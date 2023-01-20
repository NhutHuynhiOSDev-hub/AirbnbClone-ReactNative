import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationsSearchScreen from '../screens/Destinations';
import GuestsScreen from '../screens/Guests/Index';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Destinations Search"
          component={DestinationsSearchScreen}
        />

        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How Many People?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
