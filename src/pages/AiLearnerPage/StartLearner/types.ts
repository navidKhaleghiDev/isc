import DateObject from 'react-date-object';
import { FieldValues } from 'react-hook-form';

export interface IStartLearnerValues extends FieldValues {
  listener_id: string;
  first_record_time?: DateObject;
  last_record_time?: DateObject;
}
