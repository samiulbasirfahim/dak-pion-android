import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
  },
});
