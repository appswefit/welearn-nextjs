import { ClientButton, ClientCard } from '@components/index';

export function Community() {
  console.log('Page Community');

  return (
    <div>
      <span>Comunidade</span>
      <ClientButton>
        Botão
        <ClientCard />
      </ClientButton>
      <ClientCard />
      <ClientCard />
      <ClientCard />
    </div>
  );
}
