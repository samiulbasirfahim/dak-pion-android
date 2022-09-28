import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 32,
    fontFamily: 'OperatorMonoLig-Medium',
    fontWeight: 'bold',
    color: '#bf616a',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  input: {
    borderColor: '#bf616a',
    borderWidth: 2,
    marginBottom: 4,
    borderRadius: 5,
    paddingHorizontal: 8,
    alignSelf: 'stretch',
    backgroundColor: '#a3be8c',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#bf616a',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a3be8c',
  },
});

export default styles;
