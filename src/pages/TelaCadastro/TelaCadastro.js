import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput as PaperTextInput } from 'react-native-paper'; // Importando componentes do react-native-paper
import httpservice from '../../routes/http';

export default function CreateAccount() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onSubmit = async () => {
    try {
      const user = { cpf, name, email, password, confirmpassword };
      const result = await httpservice.createUser(user);
      const data = await result.json();

      console.log('Resposta completa:', data);

      if (result.status === 201) {
        console.log('Mensagem de sucesso:', data.message);
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso.');
        navigation.navigate('AuthScreens');
      } else {
        console.error('Mensagem de erro:', data.message);
        Alert.alert(
          'Erro',
          `Erro ao realizar o cadastro. Tente novamente. Detalhes: ${data.message}`,
        );
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert(
        'Erro',
        `Aconteceu um erro. Tente novamente mais tarde. Detalhes: ${error.message}`,
      );
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Crie sua Conta</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CPF</Text>
        <PaperTextInput
          placeholder="Digite seu CPF..."
          style={styles.input}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          mode="outlined"
        />
        <Text style={styles.title}>Nome Completo</Text>
        <PaperTextInput
          placeholder="Digite seu nome completo..."
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
        />
        <Text style={styles.title}>Email</Text>
        <PaperTextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <Text style={styles.title}>Senha</Text>
        <PaperTextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
        />
        <Text style={styles.title}>Confirme sua senha</Text>
        <PaperTextInput
          placeholder="Confirme sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={(text) => setConfirmPassword(text)}
          mode="outlined"
        />
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={onSubmit}
        >
          Cadastrar
        </Button>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    paddingTop: 40,
  },
  containerHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#1E90FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});
