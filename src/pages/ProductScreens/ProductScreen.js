import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import carrinhoIcon from '../../../assets/carrinhoicon.png';
import chatIcon from '../../../assets/chaticon.png';
import { Ionicons, Entypo } from '@expo/vector-icons';

const ProductScreen = ({ navigation }) => {
  const products = [
    {
      id: 1,
      name: 'Camiseta Esportiva 1',
      description: 'Descrição da camiseta esportiva 1.',
      price: 'R$ 120,00',
      image: require('../../../assets/camisa.png'),
    },
    {
      id: 2,
      name: 'Camiseta Esportiva 2',
      description: 'Descrição da camiseta esportiva 2.',
      price: 'R$ 130,00',
      image: require('../../../assets/camisa.png'),
    },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Produto ${productId} adicionado à cesta!`);
  };

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };
  const goToUserPage = () => {
    navigation.navigate('User');
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart(item.id)}
      >
        <Text style={styles.buttonText}>Adicionar à Cesta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productsList}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Image source={chatIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Image source={carrinhoIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToUserPage}>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2A9F85',
    paddingVertical: 10,
  },
  navBarButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#F4EEE7',
  },
  productsList: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A9F85',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#72AB86',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F4EEE7',
  },
});

export default ProductScreen;
