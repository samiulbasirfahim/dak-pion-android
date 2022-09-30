import {StyleSheet} from 'react-native';
import globalStyle from './global';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 2,
    borderRadius: 8,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#bf616a',
    borderRadius: 50,
    marginEnd: 12,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  username: {
    ...globalStyle.text,
  },
  message: {
    fontSize: 12,
    color: '#bf616a',
  },
});
