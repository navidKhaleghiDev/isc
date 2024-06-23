import { FieldValues } from 'react-hook-form';

export interface IStartListenerValues extends FieldValues {
  protocol: string;
  interface: string;
  port: number;
  days: number;
  hours: number;
  // startDate: string;
  // endDate: string;
  // startTime: string;
  // endTime: string;
}
