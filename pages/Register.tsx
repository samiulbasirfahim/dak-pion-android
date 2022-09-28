import {useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import globalStyle from '../styles/global';
import styles from '../styles/registerStyle';
import loginTypes from '../types/loginProps';

export default function Register({navigation}: loginTypes) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  function handleLogin() {
    console.log(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <View style={{...styles.container, ...globalStyle.container}}>
        <View style={styles.inputContainer}>
          <Text style={styles.headingText}>Register</Text>
          <TextInput
            onChangeText={(newText: string) => setName(newText)}
            value={name}
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
          <TouchableHighlight onPress={handleLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <Text
        onPress={() => navigation.navigate('Login')}
        style={{...globalStyle.text, alignSelf: 'center', marginBottom: 25}}>
        Already have an account
      </Text>
    </>
  );
}
