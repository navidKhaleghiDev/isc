import { IUser } from '@src/services/client/users/types';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface IUserWithAuth extends IUser {
  access_token: string;
  refresh_token: string;
  is_authenticated: boolean;
  force_change: boolean;
}
export interface IUserContext {
  user: IUserWithAuth | null;
  setUser: Dispatch<SetStateAction<IUserWithAuth | null>>;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);
