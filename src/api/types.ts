// types

// export enum ReqOrder {
//   Asc = 'ASC',
//   Desc = 'DESC',
// }

// export enum ReqSorting {
//   CreateDate = 'createDate',
//   Popularity = 'popularity',
//   ViewCount = 'viewCount',
//   Comment = 'comment',
//   LikeCount = 'likeCount',
// }

// export interface ReqPaging {
//   page: number;
//   size: number;
//   order?: ReqOrder;
//   sort?: ReqSorting;
//   searchContent?: string;
// }

// // LIST 요청시 Response 기본 타입
// export type ListResponse<T> = {
//   status: string;
//   data: {
//     content: Array<T>; // 항목
//     totalElements: number; // 총 항목 갯수
//     totalPages: number; // 총 페이지
//     number: number; // 현재 페이지
//   };
// };

// // LIST Response의 기본 select 타입
// export interface ListResponseSelect<T> {
//   items: Array<T>;
//   itemLength: number;
// }

// export interface InfiniteListReponseSelect<T> extends ListResponseSelect<T> {
//   curPage: number;
//   totalPages: number;
// }
