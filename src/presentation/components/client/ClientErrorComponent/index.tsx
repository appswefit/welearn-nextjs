import { ClientButton } from '../ClientButton';
import { Container } from './styles';

interface ClientErrorComponentProps {
  error: Error;
  reset: () => void;
}

export function ClientErrorComponent({ reset, error }: ClientErrorComponentProps) {
  return (
    <Container>
      <h2>Error.... {error.message}</h2>
      <ClientButton onClick={() => reset()}>Tentar novamente</ClientButton>
    </Container>
  );
}
