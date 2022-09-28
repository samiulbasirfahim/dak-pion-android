import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 24,
  },
  subContainer: {},
  avatar: {
    height: 60,
    width: 60,
  },
  selected: {
    borderColor: '#bf616a',
    borderWidth: 4,
    borderRadius: 50,
    marginVertical: 20,
  },
  setButton: {
    padding: 10,
    backgroundColor: '#bf616a',
    borderRadius: 8,
  },
  resetButton: {
    padding: 5,
    backgroundColor: '#a3be8c',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
