import styled from 'styled-components';
import Button from '../src/components/inputs/Button';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';
import { H1 } from './../src/components/typography/H1';
import { H2 } from './../src/components/typography/H2';
import { H4 } from './../src/components/typography/H4';
import Input from './../src/components/inputs/Input';

const FormContainer = styled.div`
  margin-top: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`;

const Text = styled.p`
  text-align: center;
`;

export default function LoginPage({}) {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>

      <Form>
        <H2>Entre em sua conta</H2>
        <Input label="Email ou usuário" type="email" />
        <Input label="Senha" type="password" />
        <Button>Entrar</Button>
      </Form>
      <Text>
        Não possui uma conta?
        <a href="#">Faça seu cadastro</a>
      </Text>

      <FormContainer></FormContainer>
    </ImageWithSpace>
  );
}
