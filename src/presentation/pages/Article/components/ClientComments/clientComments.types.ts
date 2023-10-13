export enum LoadClientCommentsEnum {
  done = 'done',
  pending = 'pending',
  stand_by = 'stand_by',
}

export type TypeLoadClientComments = keyof typeof LoadClientCommentsEnum;

export interface IGetComment {
  id: number;
  comment: string;
  evaluation: number;
}
