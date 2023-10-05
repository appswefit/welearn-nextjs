import { ClientButton } from '@components/client';
import { ClientCard } from '@components/client/Card';

export function Community() {
  console.log('Page Community');

  return (
    <main>
      <span>Comunidade</span>
      <ClientButton>
        Botão
        <ClientCard />
      </ClientButton>
      <ClientCard />
    </main>
  );
}
