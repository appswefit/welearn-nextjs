'use client';

import { InputHTMLAttributes, forwardRef, useRef } from 'react';

import { Container, Label, Input, TextArea, Wrapper, Clean } from './styles';

type InstersectionInput = HTMLInputElement & HTMLTextAreaElement;

interface TextInputProps extends InputHTMLAttributes<InstersectionInput> {
  label: string;
  isTextArea?: boolean;
  onClearInput?: () => void;
}

export const ClientTextInput = forwardRef<InstersectionInput, TextInputProps>((props, ref) => {
  const { label, isTextArea, onClearInput, ...restInput } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showClearInput = (ref && onClearInput) || inputRef.current !== null;
  const showClearTextarea = (ref && onClearInput) || textareaRef.current !== null;

  const clearValueInput = () => {
    if (ref && onClearInput) {
      onClearInput();
    } else if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const clearValueTextArea = () => {
    if (ref && onClearInput) {
      onClearInput();
    } else if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      {isTextArea ? (
        <Wrapper>
          <TextArea {...restInput} ref={ref ?? textareaRef} />
          {showClearTextarea && <Clean onClick={clearValueTextArea}>X</Clean>}
        </Wrapper>
      ) : (
        <Wrapper>
          <Input {...restInput} ref={ref ?? inputRef} />
          {showClearInput && <Clean onClick={clearValueInput}>X</Clean>}
        </Wrapper>
      )}
    </Container>
  );
});
