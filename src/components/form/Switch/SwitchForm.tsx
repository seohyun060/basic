import { useState } from 'react';
import { Index as S } from './style';
import { Props } from './types';

/**
 * 토글 스위치 컴포넌트
 * @param props.label 텍스트 라벨
 * @param props.initValue 초기값
 */
export default function SwitchForm({ label, onChange, initValue }: Props) {
  const [checked, setChecked] = useState<boolean>(initValue);

  function checkHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
    if (onChange) {
      onChange(e.target.checked);
    }
  }

  return (
    <S.Container>
      <label>
        <input type="checkbox" checked={checked} onChange={checkHandler} />
        {label && <span>{label}</span>}
      </label>
    </S.Container>
  );
}
