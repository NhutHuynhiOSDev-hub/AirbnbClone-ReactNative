import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
  searchBtn: {
    marginBottom: 50,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
