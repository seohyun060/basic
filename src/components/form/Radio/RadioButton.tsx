import { Index as S } from './style';
import { Props } from './types';

/**
 * 라디오 버튼 컴포넌트
 * @param props.listArr 라디오폼 항목 배열
 * @param props.checked 라디오폼 checked 항목
 */
export default function RadioButton({ listArr, name, checked, readonly }: Props) {
  return (
    <S.Container>
      <S.RadioButton>
        {listArr &&
          listArr.map((el: { value: string; label: string }, index: number) => (
            <li key={index}>
              <label>
                <input type="radio" name={name} value={el.value} checked={checked === el.value} readOnly={readonly} />
                <span>{el.label}</span>
              </label>
            </li>
          ))}
      </S.RadioButton>
    </S.Container>
  );
}
