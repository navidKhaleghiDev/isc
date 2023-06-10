import { FieldValues } from 'react-hook-form';

export interface ILoginFieldValues extends FieldValues {
  email: string;
  password: string;
}
export enum ELoginStep {
  LOGIN = 'login',
  CHANGE_PASSWORD = 'changePassword',
  REGISTER = 'register',
}

export type PropsFormType = { onChangeStep: (step: ELoginStep) => void };
