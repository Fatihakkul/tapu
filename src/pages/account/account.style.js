import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom:20
  },
  texts: {
    fontWeight: '500',
    fontSize: 30,
    color: 'black',
    letterSpacing: 2,
    textAlign: 'left',
    width: '90%',
  },
  itemsPosition: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    borderColor: 'red',
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf:'center'
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: 'gray',
    opacity: 0.2,
    marginVertical:20,
  },
});
export default Style;
