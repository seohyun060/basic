// import { customAxios } from '@/api/axios';
// import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query';
// import { COMPANY_URLS, NoticeType } from './constants';
// import { ICompanyRequest } from './types';

// const KEYS = {
//   companyRoot: ['company'],
//   companyItem: ['companyItem'],
//   companyPolicy: ['policy'],
//   companyNotice: ['notice'],
// };

// export const useTermsQuery = (type: NoticeType) =>
//   useQuery({
//     queryKey: [...KEYS.companyPolicy, type],
//     queryFn: function () {
//       return customAxios.post(COMPANY_URLS.noticeList, null, {
//         params: {
//           page: 0,
//           size: 1,
//           sort: [],
//           type: type,
//           searchContent: '',
//         },
//       });
//     },
//   });

// // 회원가입에서 이용약관과 개인정보처리방침 API 사용
// export const useAllTermsQuery = () =>
//   useQueries({
//     queries: [NoticeType.useTerms, NoticeType.privacyTerms].map((type) => ({
//       queryKey: [...KEYS.companyPolicy, type],
//       queryFn: function () {
//         return customAxios.post(COMPANY_URLS.noticeList, {
//           type: type,
//           searchContent: '',
//           page: 0,
//           size: 1,
//           sort: 'createDate',
//           order: 'ASC',
//         });
//       },
//     })),
//   });

// export const usePolicyQuery = () =>
//   useQuery({
//     queryKey: KEYS.companyPolicy,
//     queryFn: function () {
//       return customAxios.post('/notice/list', {});
//     },
//     select: (result) => {
//       console.log(result);
//     },
//   });

// // 목록
// export const useCompanyListQuery = (params: ICompanyRequest, type: NoticeType) =>
//   useQuery({
//     queryKey: [...KEYS.companyRoot, params],
//     queryFn: function () {
//       return customAxios.post(COMPANY_URLS.noticeList, { ...params, type });
//     },
//   });

// // 공지사항 , 도움말 목록(무한스크롤)
// export const useCompanyInfiniteQuery = (type: NoticeType, pazeSize: number) =>
//   useInfiniteQuery({
//     queryKey: [...KEYS.companyNotice],
//     queryFn: async function ({ pageParam }) {
//       const response = await customAxios.post(COMPANY_URLS.noticeList, {
//         page: pageParam,
//         size: pazeSize,
//         order: 'DESC',
//         sort: 'createDate',
//         type,
//       });

//       return { ...response.data.data, page: pageParam };
//     },
//     initialPageParam: 0,
//     getNextPageParam: (lastPage) => {
//       return lastPage.totalPages < lastPage.page + 2 ? undefined : lastPage.page + 1;
//     },
//   });

// //  상세
// export const useCompanyItemQuery = ({ noticeId, type }: { noticeId?: number; type: NoticeType }) =>
//   useQuery({
//     queryKey: [...KEYS.companyItem],
//     queryFn: function () {
//       return customAxios.get(COMPANY_URLS.noticeItem, { params: { noticeId, type } });
//     },
//     enabled: Boolean(type),
//   });
