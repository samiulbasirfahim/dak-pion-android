import {ActivityIndicator, View} from 'react-native';
import {styles} from '../styles/loadingStyle';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#bf616a" />
    </View>
  );
}
