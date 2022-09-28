import {Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../styles/currentUserStyle';
import globalStyle from '../styles/global';
import {currentUserType} from '../types/currentUserType';
import Logo from './Logo';

export default function CurrentUser({user, logOut}: currentUserType) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Logo imageLink={user.avatarImage}></Logo>
        <Text style={{...globalStyle.text, ...styles.username}}>
          {user.username}
        </Text>
      </View>
      <TouchableHighlight
        style={styles.logOutContainer}
        underlayColor={'#ddd'}
        onPress={logOut}>
        <Image
          style={styles.logOut}
          source={require('../assets/icons/logout.png')}></Image>
      </TouchableHighlight>
    </View>
  );
}
