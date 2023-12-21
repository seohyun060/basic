import React, { useMemo, useState } from 'react';
import { Index as S } from './style';
import { HookFormProps, InputProps } from './types';

/**
 * 텍스트 INPUT 컴포넌트
 * @param props.value input 데이터
 * @param props.type input type
 * @param props.readonly input readonly
 * @param props.error 에러 상태
 * @param props.register react-hook-form의 register
 * @param props.onChange 입력값 변경 처리 함수
 * @param props.onFocus input focus 이벤트 처리 함수
 * @param props.onBlur input blur 이벤트 처리 함수
 */
const TextInput: React.FC<HookFormProps<InputProps, HTMLInputElement>> = React.forwardRef(function ({
  placeholder,
  value: defaultValue,
  type,
  readonly,
  onFocus,
  onBlur,
  onChange,
  error,
  register,
  name,
  fontSize,
  size,
  height,
  $bgcolor,
}): JSX.Element {
  /**
   * password 텍스트 필드 처리
   */
  const [pwdShow, setPwdShow] = useState(true);
  const isPasswordType = useMemo(() => type === 'password', [type]);
  function handlePwdShow() {
    setPwdShow((show) => !show);
  }

  /**
   * size 처리
   * @todo 스타일드컴포넌트 처리
   */
  const styleHeight = useMemo(() => (size === 'small' ? 36 : 40), [size]);

  return (
    <S.Container fontsize={fontSize} height={height} $bgcolor={$bgcolor} $error={error || false}>
      <input
        name={name}
        type={`${pwdShow ? type : 'text' || 'text'}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readonly}
        style={{ height: height ? height : styleHeight }}
        {...(register && register)}
        {...(!register && {
          value: defaultValue,
          onChange: onChange,
          onBlur: onBlur,
          onFocus: onFocus,
        })}
        autoComplete="off"
      />
      {isPasswordType && (
        <button type="button" onClick={handlePwdShow}>
          <img src={`${pwdShow ? '/image/ico/ico-pwd-eye.svg' : '/image/ico/ico-pwd-eye-on.svg'}`} />
        </button>
      )}
    </S.Container>
  );
});

export default TextInput;
