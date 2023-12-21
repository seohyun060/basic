import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';
import { Colors } from '../../../themes/styles';

export const Index = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & select {
      height: ${isBrowser ? '40px' : '30px'};
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      width: 100%;
      flex: 1;
      padding-left: 20px;
      font-size: ${isBrowser ? '22px' : '14px'};
      color: ${Colors.LightGray};
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      outline: none;
      background: ${Colors.White} url(/image/bg/bg-select01.svg) no-repeat right center;
      background-size: ${isBrowser ? '24px 12px' : '18px 6px'};
      &::-ms-expand {
        display: none;
      }
      & > option {
        border-radius: 8px;
      }
    }
  `,
};
