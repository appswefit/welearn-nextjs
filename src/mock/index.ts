import { ICommunity } from 'src/presentation/pages/Community/community.types';

interface IGetNameBlog {
  id: number;
  name: string;
}

export const useMock = () => {
  const getNameBlogMock = () => {
    return new Promise<IGetNameBlog>(res => {
      setTimeout(() => {
        res({ id: 1, name: 'João Silva' });
      }, 3000);
    });
  };

  const getCommunityMock = (): Promise<Array<ICommunity>> => {
    return new Promise(res => {
      setTimeout(() => {
        res([
          { id: 1, name: 'João Silva', office: 'Tech Designer', locale: 'SP' },
          { id: 2, name: 'Maria Silva', office: 'Tech Designer', locale: 'MG' },
          { id: 3, name: 'Fernanda Silva', office: 'Designer', locale: 'SP' },
          { id: 4, name: 'Marcelo Silva', office: 'Tech Lead', locale: 'RJ' },
          { id: 5, name: 'Caio Silva', office: 'Admin', locale: 'SP' },
        ]);
      }, 3000);
    });
  };

  const getArticleMock = () => {
    return new Promise(res => {
      setTimeout(() => {
        res({
          name: 'Entendendo os componentes do servidor React',
          article:
            'Então, aqui está algo que me faz sentir velho: o React comemorou seu 10º aniversário este ano! \nNa década desde que o React foi apresentado pela primeira vez a uma comunidade de desenvolvedores desnorteada, ele passou por diversas evoluções. A equipe do React não tem sido tímida quando se trata de mudanças radicais: se descobrirem uma solução melhor para um problema, eles a seguirão. \nHá alguns meses, a equipe do React revelou os componentes do React Server, a mais recente mudança de paradigma. Pela primeira vez, os componentes do React podem ser executados exclusivamente no servidor. \nTem havido muita confusão sobre isso online. Muitas pessoas têm muitas dúvidas sobre o que é isso, como funciona, quais são os benefícios e como se encaixa em coisas como a renderização no lado do servidor. \nTenho feito muitas experiências com componentes do React Server e respondi muitas das minhas próprias perguntas. Tenho que admitir que estou muito mais animado com essas coisas do que esperava. É muito legal! \nEntão, meu objetivo hoje é ajudar a desmistificar essas coisas para você, para responder muitas das perguntas que você possa ter sobre os componentes do React Server!',
        });
      });
    });
  };

  return {
    getNameBlogMock,
    getCommunityMock,
    getArticleMock,
  };
};
