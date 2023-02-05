import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

const CustomMarker = props => {
  const {coordinate, price} = props;
  return (
    <Marker coordinate={coordinate}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Text style={styles.priceTitle}>${price}</Text>
      </View>
    </Marker>
  );
};
export default CustomMarker;
