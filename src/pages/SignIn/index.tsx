import React from "react";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Container, Content, Background } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form action="">
          <h1>Faça seu login</h1>

          <Input type="text" name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="account">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);
export default SignIn;
