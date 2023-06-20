import { IBodyAddUser } from '@src/services/client/users/types';
import { FieldValues } from 'react-hook-form';

export interface IAddUserFormValues extends FieldValues, IBodyAddUser {}
