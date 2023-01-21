import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, activeTintColor: '#f15454'}}>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="heart" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5Pro name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
