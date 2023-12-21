/**
 * 공통 메인 컴포넌트
 */

import { SGlobalMain as S } from './styles';

export default function GlobalMain({ children }: { children: JSX.Element | JSX.Element[] | string }) {
  return <S.Container>{children}</S.Container>;
}
