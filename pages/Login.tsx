import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles/loginStyle';

export default function Login() {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  function handleLogin() {
    console.log(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headingText}>Login</Text>
        <TextInput
          onChangeText={newText => setEmail(newText)}
          value={email}
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
  );
}
