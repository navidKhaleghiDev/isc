export interface IProduct {
  id: string;
  ruleName: string;
  description: string;
  link?: string;
}

export type PropsType = { item: IProduct };
