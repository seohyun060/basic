import { NormalButton } from '@/components/ui/Button';
import { SWarningtSection } from './style';

interface Props {
  message?: string;
  onClick?: () => void;
  redirectLink?: string;
  customStyle?: React.CSSProperties;
}

/**
 * 데이터 없음 컴포넌트
 * @param props.message 데이터 없음 메시지
 * @param props.onCick 클릭 처리 함수
 * @param props.redirectLink redirect path
 * @param props.customStyle 스타일
 */
export default function NotFoundSection({ message, onClick, redirectLink, customStyle }: Props) {
  return (
    <SWarningtSection.Container {...(customStyle && { style: customStyle })}>
      <SWarningtSection.Message>{message || '게시물을 찾을 수 없습니다.'}</SWarningtSection.Message>
      <SWarningtSection.Button>
        <NormalButton
          label="돌아가기"
          variant={'Pointer'}
          {...(redirectLink && { path: redirectLink })}
          {...(!redirectLink && onClick && { onClick: onClick })}
        />
      </SWarningtSection.Button>
    </SWarningtSection.Container>
  );
}
