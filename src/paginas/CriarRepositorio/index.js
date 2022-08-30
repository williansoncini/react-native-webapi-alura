import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {criarRepositorio} from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function CriarRepositorio({
  route,
  navigation,
}) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  async function salvarRepositorio() {
    const resposta = await criarRepositorio(
      nome,
      data,
      route.params.id,
    );
    if (resposta) {
      Alert.alert('Dados salvos!');
      navigation.goBack();
    } else {
      Alert.alert('Erro ao salvar os dados!');
      navigation.goBack();
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity
        style={estilos.botao}
        onPress={salvarRepositorio}>
        <Text style={estilos.textoBotao}>
          Criar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
