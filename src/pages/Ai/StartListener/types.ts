/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from 'react-hook-form';

export interface IStartListenerValues extends FieldValues {
  protocol: string;
  interface: string;
  port: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}
