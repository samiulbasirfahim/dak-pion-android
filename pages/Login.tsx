import axios from 'axios';
import {useEffect, useState} from 'react';
import {AsyncStorage, AsyncStorageStatic} from 'react-native';
import {Alert, Text, TextInput, TouchableHighlight, View} from 'react-native';
import globalStyle from '../styles/global';
import styles from '../styles/loginStyle';
import loginTypes from '../types/loginProps';
import {loginRoute} from '../utils/apiRoutes';
import Loading from './Loading';

export default function Login({navigation}: loginTypes) {
  const [username, setUsername] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function loaduser() {
      const user = await AsyncStorage.getItem('dakPion');
      if (user) {
        await navigation.navigate('Chat');
      }
      setLoading(false);
    }
    loaduser();
  }, []);

  async function handleLogin() {
    const {data} = await axios.post(loginRoute, {
      username,
      password,
    });
    if (data.status === false) {
      Alert.alert(data.msg);
    }
    if (data.status === true) {
      AsyncStorage.setItem('dakPion', JSON.stringify(data.user));
      navigation.navigate('Chat');
    }
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <View style={{...styles.container, ...globalStyle.container}}>
          <View style={styles.inputContainer}>
            <Text style={styles.headingText}>Login</Text>
            <TextInput
              onChangeText={newText => setUsername(newText)}
              value={username}
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              blurOnSubmit
              value={password}
              onChangeText={newText => setPassword(newText)}
              secureTextEntry
              style={styles.input}
              placeholder="Password"
            />
            <TouchableHighlight onPress={handleLogin}>
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
          onPress={() => navigation.navigate('Register')}>
          <Text style={globalStyle.text}>Create an account</Text>
        </TouchableHighlight>
      </>
    );
  }
}
