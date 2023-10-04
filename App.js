import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Image, TouchableOpacity, View } from 'react-native';

export default function App() {
  // Estado para armazenar o texto inserido pelo usuário
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImagem}>
        <Image style={styles.imagem} source={require('../atv_pam1/assets/compras.png')} />
      </View>

      <Text style={styles.texto}>Fazer cadastro</Text>

      {/* Campo de entrada para "Nome da Categoria" */}
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor='#3f3f3f'
          placeholder='Nome da Categoria'
          keyboardType='default' // Teclado de texto padrão
        />
      </View>

      {/* Campo de entrada para "Observações Categoria" */}
      <View>
        <TextInput
          style={styles.textbox}
          multiline={true}
          numberOfLines={4}
          onChangeText={(newText) => setText(newText)} // Atualiza o estado com o texto inserido
          value={text} // Valor do campo vem do estado
          placeholder="Observações Categoria"
          placeholderTextColor='#3f3f3f'
        />
      </View>

      {/* Botão de Cadastrar */}
      <TouchableOpacity style={styles.btnCadastrar}>
        <Text style={styles.txtCadastrar}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 16,
  },

  viewImagem: {
    padding: 20,
    alignItems: 'center',
  },

  imagem: {
    width: 300,
    height: 300,
  },

  texto: {
    color: "white",
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
  },

  containerTextInput: {
    flexDirection: 'row',
    backgroundColor: "#282727",
    borderColor: "#3f3f3f",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
    alignItems: 'center',
  },

  btnCadastrar: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },

  txtCadastrar: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },

  textbox: {
    backgroundColor: "#282727",
    borderColor: "#3f3f3f",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
    color: "white",
  },

  textInput: {
    color: "white",
  },
});
