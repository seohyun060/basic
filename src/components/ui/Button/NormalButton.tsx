import { Link } from 'react-router-dom';
import { SNormalButton as S } from './style';
import { ButtonProps } from './types';

export default function NormalButton({
  iconLeft,
  iconRight,
  label,
  variant,
  disabled,
  className,
  $bgcolor,
  ...props
}: ButtonProps) {
  /**
   * link 버튼 처리
   */
  const isLinkButton = props.path !== undefined;

  return (
    <S.Root>
      <S.Button
        $bgcolor={$bgcolor}
        as={isLinkButton ? Link : 'button'}
        className={`${variant} ${className}`}
        disabled={disabled}
        {...(isLinkButton && {
          to: props.path,
        })}
        {...(!isLinkButton && {
          type: props.type || 'button',
          onClick: props.onClick,
        })}
      >
        <>
          {iconLeft && <img src={iconLeft} />}
          {label && <span>{label}</span>}
          {iconRight && <img src={iconRight} />}
        </>
      </S.Button>
    </S.Root>
  );
}
