import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';

export const SWarningtSection = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
  Message: styled.p`
    text-align: center;
    font-weight: 300;
    font-size: ${isBrowser ? 22 : 12}px;
    color: #000;
  `,
  Button: styled.div`
    width: 168px;
  `,
};
