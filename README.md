<h1 align="center">
    <img alt="FicandoOnline" title="#FicandoOnline" src=".images/header.jpg" width="100%" />
</h1>

<h4 align="center"> 
	AluraHub 
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">O que é o AluraHub?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o AluraHub?

O AluraHub é uma aplicação feita em React Native que permite salvar um perfil com informações como nome da pessoa e uma foto, e possibilita consultar um repositório que armazena dados.

Como ele funciona? O app consome uma API externa, no caso, a API pública do Github ou uma fake API com json-server.

Esse projeto é utilizado no curso 4 da formação base de React Native da plataforma da Alura.


<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/ficando-online-newdesign.gif" width="400px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Instalar o projeto

```bash
# Instale as dependências
$ npm install
```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraHub)
$ expo start
```
# Servidor da API 

Instale a biblioteca na sua máquina com o comando no terminal

```bash
npm install -g json-server
```

Execute o seguinte comando no terminal:

```bash
json-server --watch db.json
```