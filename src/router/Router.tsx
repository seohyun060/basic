import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
// COMMON

// HOME
import HomePage from '@/pages/HomePage';
import { NotFoundSection } from '@/components/ui/Section';
// USER

// SEARCH

// NOTICE

// CONTENTS

// COMPANY

// COMMUNITY

// MYPAGE

/**
 * browser 라우터 정의
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <NotFoundSection message="페이지를 찾을 수 없습니다." redirectLink="/" customStyle={{ height: '100vh' }} />
    ),
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
