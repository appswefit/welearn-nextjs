'use client';

import { ClientButton, ClientTextInput } from '@components/index';

import { Container, Wrapper, Footer } from './styles';

export function Register() {
  console.log('Page Register');

  return (
    <Container>
      <Wrapper>
        <ClientTextInput label="Título" />
        <ClientTextInput isTextArea label="Texto" className="textarea" />
      </Wrapper>

      <Footer>
        <ClientButton>Cadastrar</ClientButton>
      </Footer>
    </Container>
  );
}
