import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  username: {
    fontSize: 20,
  },
  logOut: {
    width: 18,
    height: 18,
  },
  logOutContainer: {
    padding: 6,
    borderRadius: 8,
  },
});
