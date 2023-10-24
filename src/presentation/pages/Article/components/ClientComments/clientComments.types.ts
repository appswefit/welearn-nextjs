export interface IGetComment {
  id: number;
  comment: string;
  evaluation: number;
}

export interface IFormComments {
  comment: HTMLTextAreaElement | null;
}
