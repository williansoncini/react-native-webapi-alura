import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {atualizarRepositorio} from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function InfoRepositorio({
  route,
  navigation,
}) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const {name, data} = route.params.item;
    console.log(name, data);
    setNome(name);
    setData(data);
  }, []);

  async function salvarDados() {
    const {id, postId} = route.params.item;
    // console.log(id, postId);
    const resposta = await atualizarRepositorio(
      id,
      nome,
      data,
      postId,
    );

    if (resposta === 'sucesso') {
      Alert.alert(
        'Repositório atualizado com sucesso!',
      );
      navigation.goBack();
    } else {
      Alert.alert('Erro ao atualizar dados!');
      navigation.goBack();
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        value={nome}
        onChangeText={setNome}
        style={estilos.entrada}
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
        onPress={salvarDados}>
        <Text style={estilos.textoBotao}>
          Salvar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          estilos.botao,
          {
            backgroundColor: '#DD2B2B',
            marginTop: 10,
          },
        ]}>
        <Text style={estilos.textoBotao}>
          Deletar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
