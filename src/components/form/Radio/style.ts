import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';
import { Colors } from '../../../themes/styles';

export const Index = {
  Container: styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
  `,
  RadioButton: styled.div`
    width: calc(100% + 8px);
    height: auto;
    margin-left: -4px;
    overflow: hidden;
    & li {
      width: calc(50% - 8px);
      height: auto;
      overflow: hidden;
      margin: 8px 4px 0 4px;
      float: left;
      & label {
        cursor: pointer;
        width: 100%;
        height: 40px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        & input {
          position: absolute;
          left: -20000px;
          &:checked + span {
            border: 1px solid ${Colors.Point};
            color: ${Colors.Point};
          }
          &:checked:read-only + span {
            background-color: ${Colors.ButtonHover};
            border-color: ${Colors.ButtonHover};
            color: #000;
          }
        }
        & span {
          width: calc(100% - 2px);
          height: 38px;
          border: 1px solid #d9d9d9;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: ${isBrowser ? '22px' : '14px'};
          color: ${Colors.LightGrayHover};
        }
      }
    }
  `,
};
