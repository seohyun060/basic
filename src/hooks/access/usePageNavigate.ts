// import { setDoctorAccessAuthCheck, setLoginAccessAuthCheck } from '@/stores/accessAuth';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// /**
//  * 링크 이동 검증 hook
//  */
// export default function usePageNavigate() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // 링크 이동 검증
//   function handleNavigate(path: string, doctorValidate = false) {
//     dispatch(
//       setLoginAccessAuthCheck({
//         onAuth: () => {
//           navigate(path);
//         },
//       })
//     );

//     if (doctorValidate) {
//       dispatch(
//         setDoctorAccessAuthCheck({
//           onAuth: () => {
//             navigate(path);
//           },
//         })
//       );
//     }
//   }

//   return {
//     handleNavigate,
//   };
// }
