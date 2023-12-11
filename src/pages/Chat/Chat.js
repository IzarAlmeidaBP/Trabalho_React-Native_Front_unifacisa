import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import chatIcon from '../../../assets/chaticon.png';
import logo from '../../../assets/logo.png';
import carrinhoIcon from '../../../assets/carrinhoicon.png';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Chat = ({ navigation }) => {
  const [message, setMessage] = useState('');

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const goToHomePage = () => {
    navigation.navigate('ProductScreen');
  };

  const sendMessage = () => {
    console.log(`Mensagem enviada: ${message}`);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>Chat Screen</Text>
        <View style={styles.chatBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton}>
          <Entypo name="home" size={30} color="white" onPress={goToHomePage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Image source={carrinhoIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton}>
          <Ionicons name="man" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EEE7',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A9F85',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navBarButton: {
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#F4EEE7',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  chatText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2A9F85',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#2A9F85',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#F4EEE7',
    fontWeight: 'bold',
  },
});

export default Chat;
