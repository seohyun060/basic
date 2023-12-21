import React from 'react';
import { HookFormProps } from '../Input/types';
import { Index as S } from './style';
import { Props } from './types';

/**
 * 셀렉트폼 컴포넌트
 * @param props.listArr 셀렉트폼 항목 배열
 * @param props.selected 셀렉트폼 selected 항목
 * @param props.value 셀렉트폼 value | 초기값
 * @param props.register react-hook-form의 register
 */
const SelectForm: React.FC<HookFormProps<Props, HTMLSelectElement>> = React.forwardRef(function ({
  listArr,
  selected,
  onChange,
  register,
  name,
  value,
}: Props) {
  return (
    <S.Container>
      <select
        value={value}
        name={name}
        {...(register && register)}
        {...(!register && {
          value: selected,
          onChange: onChange,
        })}
      >
        <option value="">선택</option>
        {listArr &&
          listArr.map((el: { value: string; label: string }, index: number) => (
            <option key={index} value={el.value} {...(!register && { selected: selected === el.value })}>
              {el.label}
            </option>
          ))}
      </select>
    </S.Container>
  );
});

export default SelectForm;
