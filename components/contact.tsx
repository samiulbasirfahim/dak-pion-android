import {Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../styles/contactStyle';
import contactType from '../types/contactType';

export default function Contact({user, moveToMessages}: contactType) {
  return (
    <TouchableHighlight
      underlayColor="#ddd"
      style={styles.container}
      onPress={() => moveToMessages(user)}>
      <View style={styles.subContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              user?.avatarImage ||
              'https://media.istockphoto.com/vectors/avatar-5-vector-id1131164548?b=1&k=20&m=1131164548&s=612x612&w=0&h=GKB8fshWs-xI9s5cvTDCuVqEBL7Mdn-yxz7gReaw4fY=',
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{user?.username}</Text>
          <Text style={styles.message}>messages</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
