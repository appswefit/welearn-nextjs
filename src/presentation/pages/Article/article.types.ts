export enum LoadArticleEnum {
  done = 'done',
  pending = 'pending',
  stand_by = 'stand_by',
}

export type TypeLoadArticle = keyof typeof LoadArticleEnum;

export interface IGetArticle {
  id: number;
  title: string;
  article: string;
  comments: Array<{
    id: number;
    comment: string;
    evaluation: number;
  }>;
}
