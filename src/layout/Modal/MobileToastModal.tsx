// eslint-disable-line jsx-a11y/no-static-element-interactions
import ReactDOM from 'react-dom';
import { StyledMobileDialog as S } from './style.mobile';
import { Images } from '@/themes/styles';

export default function MobileToastModal({
  onClose,
  children,
  height,
  show,
}: {
  show: boolean;
  onClose: () => void;
  height?: number;
  children: string | string[] | JSX.Element | JSX.Element[];
}) {
  const portal = document.getElementById('portal')!;

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Root>
      <div className="overlay" onClick={onClose}></div>
      <S.Main $height={height}>
        <S.RemoveBtn onClick={onClose}>
          <img src={Images.MobModalRemove} alt="모달 제거 버튼" />
        </S.RemoveBtn>
        {children}
      </S.Main>
    </S.Root>,
    portal
  );
}
