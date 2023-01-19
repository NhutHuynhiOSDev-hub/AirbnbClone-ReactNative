import {Image, View, Text} from 'react-native';
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
      <Text style={styles.bedrooms}>1 Bed 1 Bathroom</Text>
      <Text style={styles.description} numberOfLines={4}>
        Your vacation rental property doesn’t have to be perfect, but it’s
        important to tell potential guests what they’ll find when they arrive
        and what experience they can expect. Add as many specific details as
        possible. But although you may want to show off how special your rental
        space is, you should resist the temptation to oversell or exaggerate.
        Don’t lie because travelers may leave you a negative review when your
        property doesn’t live up to what they had pictured in their minds.
        Ensure your words reflect your photos.
      </Text>
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30</Text> / night
      </Text>
      <Text style={styles.totalPrice}>$260 total</Text>
    </View>
  );
};

export default Post;
