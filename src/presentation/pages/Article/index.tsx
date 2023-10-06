import styles from './styles.module.scss';

const text = `Então, aqui está algo que me faz sentir velho: o React comemorou seu 10º aniversário este ano! \nNa década desde que o React foi apresentado pela primeira vez a uma comunidade de desenvolvedores desnorteada, ele passou por diversas evoluções. A equipe do React não tem sido tímida quando se trata de mudanças radicais: se descobrirem uma solução melhor para um problema, eles a seguirão. \nHá alguns meses, a equipe do React revelou os componentes do React Server, a mais recente mudança de paradigma. Pela primeira vez, os componentes do React podem ser executados exclusivamente no servidor. \nTem havido muita confusão sobre isso online. Muitas pessoas têm muitas dúvidas sobre o que é isso, como funciona, quais são os benefícios e como se encaixa em coisas como a renderização no lado do servidor. \nTenho feito muitas experiências com componentes do React Server e respondi muitas das minhas próprias perguntas. Tenho que admitir que estou muito mais animado com essas coisas do que esperava. É muito legal! \nEntão, meu objetivo hoje é ajudar a desmistificar essas coisas para você, para responder muitas das perguntas que você possa ter sobre os componentes do React Server!`;

export function Article() {
  console.log('Page Article');

  const paragraphs = text.split(/\n+/);

  // Mapeie as substrings em elementos React <p>
  const paragraphsElements = paragraphs.map((paragraph, index) => (
    <p key={index} className={styles.paragraph}>
      {paragraph}
    </p>
  ));

  return (
    <article className={styles.article}>
      <h2 className={styles.title}>Entendendo os componentes do servidor React</h2>
      {paragraphsElements}
    </article>
  );
}
