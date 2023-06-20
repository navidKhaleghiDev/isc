import { FieldValues } from 'react-hook-form';

export interface ILoginFieldValues extends FieldValues {
  email: string;
  password: string;
  remember_me?: boolean;
}
export enum ELoginStep {
  LOGIN = 'login',
  CHANGE_PASSWORD = 'changePassword',
  AUTHENTICATION = 'authentication',
  REGISTER_SERIAL_DEVICE = 'resisterSerialDevice',
}

export type PropsFormType = {
  onChangeStep: (step: ELoginStep) => void;
  getProfile: () => void;
};
