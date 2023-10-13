import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  height: 90%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  flex: 1;

  .textarea {
    min-height: 25vh;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  button {
    float: right;
  }
`;
