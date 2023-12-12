import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import chatIcon from '../../../assets/chaticon.png';

const User = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleLogin = () => {};

  const handleChoosePhoto = () => {};

  const goToHomePage = () => {
    navigation.navigate('ProductScreen');
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profilePic ? (
          <Image source={{ uri: profilePic }} style={styles.profileImage} />
        ) : (
          <TouchableOpacity
            style={styles.addPhotoButton}
            onPress={handleChoosePhoto}
          >
            <Ionicons name="camera" size={30} color="black" />
            <Text>Adicionar Foto</Text>
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.nameInput}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToHomePage}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Image source={chatIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EEE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  addPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 200,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#2A9F85',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2A9F85',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
  },
  navBarButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#F4EEE7',
  },
});

export default User;
