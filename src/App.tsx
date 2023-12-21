import GlobalFooter from '@/layout/GlobalFooter';
import GlobalHeader from '@/layout/GlobalHeader';

import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import GlobalMain from './layout/GlobalMain';

export default function App(): React.ReactElement {
  const location = useLocation();

  //페이지가 이동될 때마다 스크롤 초기화
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <GlobalHeader />
      <GlobalMain>
        {/* 컨텐츠 영역 */}
        <Outlet />
        <GlobalFooter />
      </GlobalMain>
    </div>
  );
}
