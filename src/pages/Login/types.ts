import { FieldValues } from 'react-hook-form';

export interface ILoginFieldValues extends FieldValues {
  email: string;
  password: string;
  remember_me?: boolean;
}
export enum ELoginStep {
  LOGIN = 'login',
  CHANGE_PASSWORD = 'changePassword',
  REGISTER = 'register',
}

export type PropsFormType = { onChangeStep: (step: ELoginStep) => void };
