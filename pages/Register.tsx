import axios from 'axios';
import {useState} from 'react';
import {
  Alert,
  AsyncStorage,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import globalStyle from '../styles/global';
import styles from '../styles/registerStyle';
import loginTypes from '../types/loginProps';
import {registerRoute} from '../utils/apiRoutes';

export default function Register({navigation}: loginTypes) {
  const [username, setuserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  async function handleRegister() {
    if (!username) {
      return Alert.alert('Name required');
    }
    if (!email) {
      return Alert.alert('Email required');
    }
    if (password.length < 8) {
      return Alert.alert('Password should be more than 8 charectar');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Password and confirm password are not same');
    }
    const {data} = await axios.post(registerRoute, {
      username,
      email,
      password,
    });

    if (data.status === false) {
      Alert.alert(data.msg);
    } else if (data.status === true) {
      AsyncStorage.setItem('dakPion', JSON.stringify(data.user));
      navigation.navigate('Chat');
    }
  }

  return (
    <>
      <View style={{...styles.container, ...globalStyle.container}}>
        <View style={styles.inputContainer}>
          <Text style={styles.headingText}>Register</Text>
          <TextInput
            onChangeText={(newText: string) => setuserName(newText)}
            value={username}
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            onChangeText={(newText: string) => setEmail(newText)}
            value={email}
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            blurOnSubmit
            value={password}
            onChangeText={(newText: string) => setPassword(newText)}
            secureTextEntry
            style={styles.input}
            placeholder="Password"
          />
          <TextInput
            blurOnSubmit
            value={confirmPassword}
            onChangeText={(newText: string) => setConfirmPassword(newText)}
            secureTextEntry
            style={styles.input}
            placeholder="Confirm Password"
          />
          <TouchableHighlight onPress={handleRegister}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight
        underlayColor={'#ddd'}
        style={{
          marginBottom: 25,
          alignSelf: 'center',
          borderRadius: 8,
          padding: 4,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyle.text}>Already have account</Text>
      </TouchableHighlight>
    </>
  );
}
