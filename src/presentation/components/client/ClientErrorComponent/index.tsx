import { ClientButton } from '../ClientButton';
import { Container, Span } from './styles';

interface ClientErrorComponentProps {
  error: Error;
  reset: () => void;
}

export function ClientErrorComponent({ reset, error }: ClientErrorComponentProps) {
  return (
    <Container>
      <Span>X</Span>
      <h2>Error.... {error.message}</h2>
      <ClientButton onClick={() => reset()}>Tentar novamente</ClientButton>
    </Container>
  );
}
