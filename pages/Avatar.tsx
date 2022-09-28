import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {styles} from '../styles/avatarStyle';
import globalStyle from '../styles/global';
import userType from '../types/userType';
import {setAvatarRoute} from '../utils/apiRoutes';
import Loading from './Loading';

export default function Avatar({navigation}: {navigation: any}) {
  const [avatars, setAvatars] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<userType>({
    __v: 0,
    avatarImage: '',
    _id: '',
    username: '',
    email: '',
    isAvatarImageSet: false,
    password: '',
  });
  const api = `https://api.multiavatar.com/4641646`;

  useEffect(() => {
    async function loadData() {
      const user: userType | any = await AsyncStorage.getItem('dakPion');
      setCurrentUser(JSON.parse(user));
    }
    loadData();
  }, []);

  async function setAvatar() {
    if (!currentUser._id) {
      Alert.alert('Something went wrong');
      navigation.navigate('Login');
    }
    if (selected !== null) {
      console.log(`${setAvatarRoute}/${currentUser._id}`);
      const {data} = await axios.post(`${setAvatarRoute}/${currentUser._id}`, {
        image: avatars[selected],
      });
      if (data.isSet) {
        currentUser.isAvatarImageSet = true;
        currentUser.avatarImage = avatars[selected];
        AsyncStorage.setItem('dakPion', JSON.stringify(currentUser));
        // socket.emit('register-user', user._id);
        navigation.navigate('Chat', {
          avatar: avatars[selected],
        });
      } else {
        Alert.alert('Something went wrong');
      }
    } else {
      Alert.alert('Please select one');
    }
  }

  function loadImage() {
    const data = [];
    for (let i = 0; i < 3; i++) {
      const image = `${api}/${Math.round(Math.random() * 100)}.png`;
      data.push(image);
    }
    setAvatars(data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadImage();
  }, []);

  console.log(avatars);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{...globalStyle.text, ...styles.headerText}}>
          Select an avatar
        </Text>
        <View style={styles.subContainer}>
          {avatars.map((imageLink: string, index: number) => {
            {
              return (
                <TouchableHighlight
                  underlayColor={'#ddd'}
                  style={
                    selected === index
                      ? styles.selected
                      : {
                          marginVertical: 20,
                          borderWidth: 4,
                          borderColor: 'transparent',
                          borderRadius: 50,
                        }
                  }
                  onPress={() => setSelected(index)}>
                  <Image style={styles.avatar} source={{uri: imageLink}} />
                </TouchableHighlight>
              );
            }
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.setButton}
            underlayColor={'#ddd'}
            onPress={setAvatar}>
            <Text style={{...globalStyle.text}}>Set Avatar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.resetButton}
            underlayColor={'#ddd'}
            onPress={() => loadImage()}>
            <Text style={{...globalStyle.text}}>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
