export interface ButtonProps {
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  variant?: string;
  disabled?: boolean;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  path?: string;
  $bgcolor?: string;
}
