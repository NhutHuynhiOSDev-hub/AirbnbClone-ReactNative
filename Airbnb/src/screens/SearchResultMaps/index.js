import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
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
        <CustomMarker />
        {places.map(place => (
          <CustomMarker
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultMaps;
