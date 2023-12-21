import { Index as S } from './style';
import { Props } from './types';

/**
 * 체크박스 입력 컴포넌트
 * @param props.label 체크박스 텍스트 라벨
 */
export default function CheckForm({ label, checked, onChange }: Props) {
  return (
    <S.Container>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>{label}</span>
      </label>
    </S.Container>
  );
}
