'use client';

import { ProviderStyledComponents } from '../providers';
import { Card } from './styles';

export function ClientCard() {
  return (
    <ProviderStyledComponents>
      <Card />
    </ProviderStyledComponents>
  );
}
