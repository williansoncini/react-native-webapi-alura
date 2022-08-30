import api from '../api';
export async function pegarRepositoriosDosUsuarios(
  id,
) {
  try {
    const resultado = await api.get(
      `/repos?postId=${id}`,
    );
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function atualizarRepositorio(
  id,
  name,
  data,
  postId,
) {
  try {
    await api.put(`/repos/${id}`, {
      id,
      name,
      data,
      postId,
    });
    return 'sucesso';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}

export async function criarRepositorio(
  name,
  data,
  postId,
) {
  try {
    const resultado = await api.post('/repos', {
      name,
      data,
      postId,
    });
    return resultado.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function deletarRepositorio(
  id,
  postId,
) {
  try {
    await api.delete(`/repos/${id}`, {
      id,
      postId,
    });
    return 'sucesso';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}
