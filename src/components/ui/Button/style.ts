import { isBrowser } from 'react-device-detect';
import styled from 'styled-components';
import { Colors } from '../../../themes/styles';

export const SNormalButton = {
  Root: styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Button: styled.button<{ $bgcolor?: string }>`
    transition: all 0.2s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0 14px;
    height: ${isBrowser ? '40px' : '36px'};
    border: 0;
    flex: 1;
    background: ${({ $bgcolor }) => $bgcolor || Colors.Point};
    & img {
      width: ${isBrowser ? '26px' : '15px'};
      & + span {
        margin-left: 10px;
      }
    }
    & span {
      font-size: ${isBrowser ? '22px' : '14px'};
      color: ${Colors.White};
      & + img {
        margin-left: 10px;
      }
    }
    &[disabled] {
      background: ${Colors.LightGray};
    }

    &.Transparent {
      height: 40px;
      background: transparent;
      &:hover {
        background: transparent;
      }
    }
    &.Transparent.on {
      background: transparent;
      & > img {
        filter: brightness(0) saturate(100%) invert(73%) sepia(15%) saturate(1813%) hue-rotate(126deg) brightness(83%)
          contrast(84%);
      }
    }
    &.LightGray {
      height: 44px;
      background: ${Colors.LightGray};
      & span {
        color: ${Colors.White};
      }
      &[disabled] {
        background: ${Colors.LightGray};
      }
      &:hover {
        background: ${Colors.LightGrayHover};
      }
    }
    &.Register {
      height: 44px;
      background: ${Colors.Button};
      & span {
        color: ${Colors.LightGray};
      }
      & img {
        filter: brightness(0) saturate(100%) invert(54%) sepia(21%) saturate(280%) hue-rotate(202deg) brightness(95%)
          contrast(82%);
      }
      &[disabled] {
        background: ${Colors.Button};
      }
      &:hover:not(:disabled) {
        background: #299a93;
        & span {
          color: ${Colors.White};
        }
        & img {
          filter: brightness(0) saturate(100%) invert(99%) sepia(1%) saturate(7472%) hue-rotate(176deg) brightness(127%)
            contrast(87%);
        }
      }
    }
    &.Error {
      height: 44px;
      background: ${Colors.Error} !important;
      & span {
        color: ${Colors.White};
      }
      &[disabled] {
        background: ${Colors.LightGray};
      }
      &:hover {
        background: ${Colors.ErrorHover};
      }
    }
    &.Point {
      height: 44px;
      background: ${Colors.Point};
      & span {
        color: ${Colors.White};
      }
      &[disabled] {
        background: ${Colors.LightGray};
      }
      &:hover {
        background: ${Colors.PointHover};
      }
    }
    &.More {
      width: 220px;
      height: 58px;
      border-radius: 30px;
      background: ${Colors.DarkMidiumGray};
      & span {
        color: ${Colors.White};
      }
      &[disabled] {
        background: ${Colors.LightGray};
      }
      &:hover {
        background: ${Colors.DarkMidiumGrayHover};
      }
    }
    &.Back {
      margin: 0 auto;
      flex: initial;
      width: 170px;
      height: 48px;
      overflow: hidden;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
      border-radius: 45px;
      background: ${Colors.White};
      border: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      & span {
        font-size: 26px;
        color: ${Colors.Black};
      }
    }
    &.Like {
      margin: 0 auto;
      flex: initial;
      width: 130px;
      height: 130px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 50%;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
      &:hover {
        background: #f5f5f5;
      }
    }
    &.Like.on {
      background: ${Colors.Point};
      & > img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(687%) hue-rotate(266deg) brightness(115%)
          contrast(100%);
      }
    }
    &.PostsLink {
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
      background: ${Colors.DarkMidiumGray};
      width: 244px;
      max-width: 100%;
      flex: initial;
      margin: 0 auto;
      border-radius: 20px;
      height: 44px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      & span {
        display: flex;
        font-size: 22px;
        color: ${Colors.White};
      }
      &:hover {
        background: ${Colors.DarkMidiumGrayHover};
      }
    }
    &.Close {
      margin: 0 auto;
      flex: initial;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 45px;
      background: ${Colors.White};
      border: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};
