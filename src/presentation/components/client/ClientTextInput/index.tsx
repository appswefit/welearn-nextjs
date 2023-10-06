'use client';

import { InputHTMLAttributes, useRef } from 'react';

import { Container, Label, Input, TextArea, Wrapper, Clean } from './styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isTextArea?: boolean;
}

export const ClientTextInput = ({ label, isTextArea }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const clearValueInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const clearValueTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      {isTextArea ? (
        <Wrapper>
          <TextArea ref={textareaRef} />
          <Clean onClick={clearValueTextArea} isTextarea>
            X
          </Clean>
        </Wrapper>
      ) : (
        <Wrapper>
          <Input ref={inputRef} />
          <Clean onClick={clearValueInput}>X</Clean>
        </Wrapper>
      )}
    </Container>
  );
};
