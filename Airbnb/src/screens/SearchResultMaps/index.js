import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const {View, Text} = require('react-native');

const SearchResultMaps = props => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 10.796897374650548,
          longitude: 106.69086520199261,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: 10.796897374650548,
            longitude: 106.69086520199261,
          }}>
          <View style={styles.markerContainer}>
            <Text style={styles.priceTitle}>$300</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default SearchResultMaps;
