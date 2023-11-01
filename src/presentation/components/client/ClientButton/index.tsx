'use client';

import { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ClientButton({ children, ...restButton }: ButtonProps) {
  return (
    <Button
      onClick={() => {
        console.log('skjnfksnfksdnfksdnj');
      }}
      {...restButton}
    >
      {children}
    </Button>
  );
}
