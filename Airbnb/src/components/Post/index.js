import {Image, View, Text} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.travel.com.vn/destination/tf_220726033156_024216.jpg',
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bedroom} bed - {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type} . {post.title}
      </Text>
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>{post.oldPrice}</Text>
        <Text style={styles.newPrice}> {post.newPrice}</Text> / night
      </Text>
      <Text style={styles.totalPrice}>{post.totalPrice}</Text>
    </View>
  );
};

export default Post;
