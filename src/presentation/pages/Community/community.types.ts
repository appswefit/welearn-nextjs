export interface ICommunity {
  id: number;
  name: string;
  office: string;
  locale: string;
}

export enum LoadParametrizationEnum {
  done = 'done',
  pending = 'pending',
  stand_by = 'stand_by',
}

export type TypeLoadParametrization = keyof typeof LoadParametrizationEnum;
