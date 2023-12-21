// import ROUTES from '@/router/routes';
// import { RootState } from '@/stores';
// import { setDoctorAccessAuthCheck, setLoginAccessAuthCheck } from '@/stores/accessAuth';
// import { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';

// // 접근 권한
// enum AccessValidation {
//   IsForNotLoggedIn,
//   IsForLoggedIn,
//   IsForDoctor,
//   IsValid,
//   IsNotValid,
// }

// /**
//  * 접근 권한 검증 hooks
//  */
// export default function usePageAccess() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLoggedIn, isDoctor } = useSelector((state: RootState) => state.user); // 로그인, 로그인 정보 스토어
//   const accessValidation = useMemo((): AccessValidation | undefined => {
//     const route = Object.values(ROUTES).find((v) => v.fullPath === location.pathname);

//     if (!route) return AccessValidation.IsNotValid;
//     if (!route.access) return AccessValidation.IsValid;

//     if (route.access.doctorOnly) {
//       return isLoggedIn
//         ? isDoctor
//           ? AccessValidation.IsValid
//           : AccessValidation.IsForDoctor
//         : AccessValidation.IsForLoggedIn;
//     }

//     if (route.access.loggedInOnly) {
//       return isLoggedIn ? AccessValidation.IsValid : AccessValidation.IsForLoggedIn;
//     }

//     if (route.access.notLoggedInOnly) {
//       return isLoggedIn ? AccessValidation.IsForNotLoggedIn : AccessValidation.IsValid;
//     }

//     return undefined;
//   }, [location, isLoggedIn, isDoctor]); // 현재 라우터의 접근권한 판별

//   useEffect(() => {
//     if (accessValidation === undefined) {
//       return;
//     }

//     switch (accessValidation) {
//       case AccessValidation.IsForNotLoggedIn:
//         window.alert('로그아웃 후 이용해 주세요.');
//         window.location.href = '/';
//         break;
//       case AccessValidation.IsForLoggedIn:
//         dispatch(setLoginAccessAuthCheck({ onClick: () => { navigate('/'); } }));
//         break;
//       case AccessValidation.IsForDoctor:
//         dispatch(setDoctorAccessAuthCheck({ onClick: () => { navigate('/'); } }));
//         break;
//     }
//   }, [accessValidation]);

//   return {
//     accessValidation,
//   };
// }
