import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';
import { Colors } from '../../../themes/styles';

export const Index = {
  Container: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & input {
        display: flex;
      }
      & input[type='checkbox'] {
        display: flex;
        background: url(../image/bg/bg-chk-login-persist-off.svg) no-repeat;
        background-size: ${isBrowser ? '20px 20px' : '16px 16px'};
        border: 0px;
        width: ${isBrowser ? '20px' : '16px'};
        height: ${isBrowser ? '20px' : '16px'};
        overflow: hidden;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        &:checked {
          width: ${isBrowser ? '20px' : '16px'};
          height: ${isBrowser ? '20px' : '16px'};
          font-weight: bold;
          background: url(../image/bg/bg-chk-login-persist.svg) no-repeat;
          background-size: ${isBrowser ? '20px 20px' : '16px 16px'};
        }
      }
      & span {
        display: flex;
        margin-left: 10px;
        font-size: ${isBrowser ? '20px' : '12px'};
        font-weight: 300;
        color: ${Colors.Black};
      }
    }
  `,
};
