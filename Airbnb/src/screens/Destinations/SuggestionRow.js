import {Pressable, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const SuggestionRow = ({item}) => (
  <View>
    <View style={styles.iconContainer}>
      <Entypo name="location-pin" size={35} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);
export default SuggestionRow;
