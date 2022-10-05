import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Avatar from './pages/Avatar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Register from './pages/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Chat" component={Chat} options={{title: 'Chat'}} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="Avatar"
          component={Avatar}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            title: 'Messages',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
