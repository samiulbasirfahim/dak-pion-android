import axios from 'axios';
import {useEffect, useState} from 'react';
import {Alert, AsyncStorage, StyleSheet, Text, View} from 'react-native';
import CurrentUser from '../components/currentUser';
import globalStyle from '../styles/global';
import userType from '../types/userType';
import {logoutRoute} from '../utils/apiRoutes';

export default function Chat({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  const [currentUser, setCurrentUser] = useState<userType>({});
  useEffect(() => {
    async function loadData() {
      const user: userType | any = await AsyncStorage.getItem('dakPion');
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

  async function logOut() {
    const id = currentUser._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      AsyncStorage.removeItem('dakPion');
      navigation.navigate('Login');
    }
  }

  return (
    <View style={{...styles.container, ...globalStyle.container}}>
      <CurrentUser user={currentUser} logOut={logOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
