import {StyleSheet, Text, View} from 'react-native';
import globalStyle from '../styles/global';

export default function Chat() {
  return (
    <View style={{...styles.container, ...globalStyle.container}}>
      <Text>Chat page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
