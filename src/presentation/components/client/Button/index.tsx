'use client';

import { ButtonHTMLAttributes } from 'react';

import { ProviderStyledComponents } from '../providers';
import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ClientButton({ children, ...restButton }: ButtonProps) {
  return (
    <ProviderStyledComponents>
      <Button {...restButton}>{children}</Button>
    </ProviderStyledComponents>
  );
}
