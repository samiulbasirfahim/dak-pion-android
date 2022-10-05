import {Image, Text, TouchableHighlight, View} from 'react-native';
import Logo from '../components/Logo';
import globalStyle from '../styles/global';
import {styles} from '../styles/messagesStyle';
import userType from '../types/userType';

export default function Messages({route, navigation}: any) {
  const user: userType = route.params.user;
  return (
    <View style={{...globalStyle.container}}>
      <View style={styles.container}>
        <View>
          <Logo imageLink={user?.avatarImage || ''} />
        </View>
        <Text style={{...globalStyle.text, ...styles.username}}>
          {user?.username}
        </Text>
      </View>
    </View>
  );
}
