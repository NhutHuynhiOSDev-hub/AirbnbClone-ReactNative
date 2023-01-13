import {Image, View} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.travel.com.vn/destination/tf_220726033156_024216.jpg',
        }}
      />
      {/* <Bed & room> */}
      {/* <Type Description> */}
      {/* <Price> */}
      {/* <Total Price> */}
    </View>
  );
};

export default Post;
