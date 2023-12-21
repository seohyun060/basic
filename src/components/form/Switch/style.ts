import styled from 'styled-components';
import { Colors } from '../../../themes/styles';
import { isBrowser } from 'react-device-detect';

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
        outline: none;
        background: ${Colors.Button};
        border-radius: 25px;
        border: 0;
        width: ${isBrowser ? '100px' : '48px'};
        height: ${isBrowser ? '50px' : '24px'};
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        transition: all 0.5s;
        position: relative;
        &::before {
          content: '';
          width: ${isBrowser ? '50px' : '24px'};
          height: ${isBrowser ? '50px' : '24px'};
          display: block;
          overflow: hidden;
          border-radius: 50%;
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          background: ${Colors.White};
          position: absolute;
          left: 0;
          top: 0;
          transition: all 0.5s;
        }
        &:checked {
          background: ${Colors.Point};
          &::before {
            left: ${isBrowser ? '50px' : '24px'};
          }
        }
      }
    }
    & span {
      display: flex;
      margin-left: 20px;
      font-size: 22px;
      font-weight: 400;
      color: ${Colors.Black};
    }
  `,
};
