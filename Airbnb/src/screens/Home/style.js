import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  btn: {
    width: 200,
    height: 40,
    backgroundColor: '#ffff',
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchBtn: {
    height: 40,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#ffff',
    marginHorizontal: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
  searchBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
