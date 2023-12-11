import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import chatIcon from '../../../assets/chaticon.png';
import User from '../User/User';

const Cart = ({ navigation }) => {
  const cartItems = [
    {
      id: 1,
      name: 'Camiseta Esportiva 1',
      price: 'R$ 120,00',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Camiseta Esportiva 2',
      price: 'R$ 130,00',
      quantity: 2,
    },
  ];

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };

  const goToHomePage = () => {
    navigation.navigate('ProductScreen');
  };
  const goToUserPage = () => {
    navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartItemsContainer}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.cartItemsList}
        />

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton}>
          <Entypo name="home" size={30} color="white" onPress={goToHomePage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Image
            source={chatIcon}
            style={[styles.icon, { tintColor: 'white' }]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton}>
          <Ionicons name="man" size={30} color="white" onPress={goToUserPage} />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2A9F85',
    paddingVertical: 10,
    paddingHorizontal: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    tintColor: 'black',
  },
  cartItemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 60, // Added padding for the navBar to be above
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#2A9F85',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  checkoutButton: {
    backgroundColor: '#72AB86',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4EEE7',
  },
});

export default Cart;
