import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d8d8d',
  },
  adjustContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adjustText: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  button: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: '#676767',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
