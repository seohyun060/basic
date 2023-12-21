import { Colors } from '@/themes/styles';
import styled from 'styled-components';

export const StyledMobileDialog = {
  Root: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(55, 55, 68, 0.8);
    z-index: 999;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
  `,
  Main: styled.div<{ $height?: number }>`
    position: relative;
    width: 100%;
    z-index: 11;
    position: fixed;
    height: ${({ $height }) => 'auto' || $height + 'px'};
    bottom: 0;
    border-radius: 14px 14px 0px 0px;
    background-color: ${Colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  `,
  RemoveBtn: styled.button`
    margin-top: 9px;
    margin-bottom: 20px;
    /* & img {
      width: 5px;
      height: 10px;
    } */
  `,
};
