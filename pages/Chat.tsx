import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Alert,
  AsyncStorage,
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Contact from '../components/contact';
import CurrentUser from '../components/currentUser';
import globalStyle from '../styles/global';
import userType from '../types/userType';
import {allUsersRoute, logoutRoute} from '../utils/apiRoutes';

export default function Chat({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  const [currentUser, setCurrentUser] = useState<userType>(route?.user || {});
  const [contacts, setContacts] = useState<userType[]>([]);
  useEffect(() => {
    async function loadData() {
      const user: userType | any = await AsyncStorage.getItem('dakPion');
      if (!user) {
        return navigation.navigate('Login');
      }
      setCurrentUser(JSON.parse(user));
    }
    loadData();
  }, []);

  useEffect(() => {
    if (route?.params?.avatar) {
      setCurrentUser({
        ...currentUser,
        avatarImage: route.params.avatar,
        isAvatarImageSet: true,
      });
    }
  }, [route]);

  useEffect(() => {
    if (currentUser._id) {
      if (!currentUser.isAvatarImageSet) {
        navigation.navigate('Avatar');
      }
    }
  }, [currentUser]);

  useEffect(() => {
    async function loadData() {
      if (currentUser) {
        if (currentUser?.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
        }
      }
    }
    loadData();
  }, [currentUser]);

  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (e: any) => {
  //     e.preventDefault();
  //   });
  // }, [navigation]);

  async function logOut() {
    const id = currentUser._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      navigation.navigate('Login');
      AsyncStorage.removeItem('dakPion');
    }
  }

  function moveToAvatar() {
    navigation.navigate('Avatar');
  }

  function moveToMessages(user: userType) {
    navigation.navigate('Messages', {
      user,
    });
  }

  return (
    <View style={{...styles.container, ...globalStyle.container}}>
      <CurrentUser
        user={currentUser}
        logOut={logOut}
        moveToAvatar={moveToAvatar}
      />
      <ScrollView>
        {contacts.map((contact: userType) => (
          <Contact
            key={contact._id}
            user={contact}
            moveToMessages={moveToMessages}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
