<p align="center">
    <img width="300" align="center" src=".github/gostack.svg">   
</p>

<h1 align="center">
    GoBarber Web
</h1>

<h3 align="center">
Plataforma de agendamento e gerenciamento para barbearias
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#pencil-como-contribuir">Como contribuir</a> | <a href="#page_with_curl-licença">Licença</a>
</p>

## Layout

<img src=".github/gobarber_web.gif">

## :rocket: Sobre o projeto

<p>Esta é uma plataforma completa onde o cliente pode visualizar a agenda de barbeiros e agendar um horário, 
e para barbeiros, permite gerenciar os horários marcados.</p> 

<p>Com a versão web, os barbeiros poderão gerenciar sua agenda controlando os horários que foram marcados pelos clientes através da versão mobile.</p>

<p>Este é o repositório da versão web do projeto.</p>
<ul>
  <li>Para a api REST, <a href="https://github.com/nathaliacristina20/gostack-gobarber-server">clique aqui</a>.</li>
  <li>Para a versão mobile, <a href="https://github.com/nathaliacristina20/gostack-gobarber-mobile">aqui</a>.</li>
</ul>

## :computer: Tecnologias
    
- [React.js](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Polished](https://polished.js.org/)
- [Axios](https://github.com/axios/axios)
- [Unform](https://unform.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [Jest](https://jestjs.io/)
- [Uuidv4](https://github.com/thenativeweb/uuidv4)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- [Api REST do GoBarber](https://github.com/nathaliacristina20/gostack-gobarber-server)

### Como executar

<i>Antes de executar estes passos, certifique-se que sua api REST esteja em execução</i>

- Clone o repositório ```git clone https://github.com/nathaliacristina20/gostack-gobarber-web.git```
- Vá até o diretório ```cd gostack-gobarber-web```
- Execute ```yarn``` para instalar as dependências
- Execute ```yarn start``` para rodar o servidor

- Caso deseje executar os testes unitários basta executar ```yarn test``` em seu terminal. 
- Para visualizar um relatório detalhado sobre a cobertura dos testes rode ```yarn test:coverage``` e acesse o arquivo ```coverage/lcov-report/index.html```.

## :pencil: Como contribuir

<b>Faça um fork deste repositório</b>

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gostack-gobarber-server

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :page_with_curl: Licença

Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/nathaliacristina20/be-the-hero/blob/master/LICENSE">LICENSE</a> para mais detalhes.

<hr />
<p>by Nathalia Cristina :wave: <a href="https://linktr.ee/nathaliacristina20">Get in touch!</a></p>
