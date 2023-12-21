import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';
import { Colors } from '../../../themes/styles';

export const Index = {
  Container: styled.div<{ height?: string; fontsize?: string; $bgcolor?: string; $error: boolean }>`
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & input {
      background: ${({ $bgcolor }) => $bgcolor || '#f5f5f5'};
      height: ${({ height }) => height || '40px'};
      border: ${(props) => (props.$error ? `1px solid ${Colors.Error}` : 0)};
      width: 100%;
      flex: 1;
      padding: 0 16px;
      font-size: ${({ fontsize }) => fontsize || (isBrowser ? '22px' : '14px')};
      /* color: ${(props) => (props.$error ? Colors.Error : Colors.Black)}; */
      border-radius: ${isBrowser ? 8 : 4}px;

      &::placeholder {
        font-size: 16px;
      }
    }
    & button {
      width: 25px;
      height: 25px;
      overflow: hidden;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border: 0;
      background: transparent;
      position: absolute;
      right: 8px;
      top: 8px;
    }
    & img {
      width: ${isBrowser ? '24px' : '16px'};
      height: ${isBrowser ? '24px' : '16px'};
    }
  `,
  Input: styled.input<{ $error?: boolean }>`
    background: #f5f5f5;
    width: 100%;
    height: 40px;
    border: ${(props) => (props.$error ? '1px solid #B63242' : 0)};
    width: 100%;
    flex: 1;
    padding: 0 16px;
    font-size: 22px;
    color: ${Colors.Black};
    border-radius: 8px;

    &::placeholder {
      font-size: 16px;
      color: ${Colors.LightGray};
    }
  `,
};
