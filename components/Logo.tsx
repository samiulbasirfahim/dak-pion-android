import {Image, Text, View} from 'react-native';
import logoType from '../types/logoProps';

export default function ({imageLink}: logoType) {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 8,
      }}>
      <Image style={{height: 40, width: 40}} source={{uri: imageLink}}></Image>
    </View>
  );
}
