interface IGetNameBlog {
  id: number;
  name: string;
}

export function getNameBlog() {
  return new Promise<IGetNameBlog>(res => {
    setTimeout(() => {
      res({ id: 1, name: 'João Silva' });
    }, 3000);
  });
}
