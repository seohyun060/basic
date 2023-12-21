import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

/**
 * input 요소 기본 properties
 * attribute: type,
 */
export interface InputProps {
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  size?: string;
  error?: boolean;
  fontSize?: string;
  height?: string;
  name?: string;
  $bgcolor?: string;
}

/**
 * react-hook-form과 연동하여 사용할 때 properties
 * React.ForwardRef - ref 참조 필수
 */
export type HookFormProps<T, D> = T & {
  register?: UseFormRegisterReturn;
  ref?: React.ForwardedRef<D>;
};
