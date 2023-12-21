/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Props {
  active?: boolean;
  setFunc?: any;
}

export interface IReplySection {
  child: boolean;
  setReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
