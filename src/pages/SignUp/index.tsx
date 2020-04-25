import React from "react";

import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Container, Content, Background } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form action="">
          <h1>Faça seu cadastro </h1>
          <Input type="text" name="name" icon={FiUser} placeholder="Nome" />
          <Input type="text" name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="account">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  </>
);
export default SignUp;
