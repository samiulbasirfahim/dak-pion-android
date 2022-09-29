import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    marginTop: 12,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#bf616a',
    elevation: 2,

    // shadowOffset:
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#bf616a',
    borderRadius: 50,
    marginEnd: 10
  },
});
