import { UseFormRegisterReturn } from 'react-hook-form';

export interface Props {
  label?: string;
  listArr?: Array<any>;
  selected?: string;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  value?: string;
  register?: UseFormRegisterReturn;
}
