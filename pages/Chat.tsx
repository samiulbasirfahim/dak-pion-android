import {StyleSheet, Text, View} from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
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
