import styled from '@emotion/styled';

import { black } from '../index';

export default {
  Logo: styled.p`
    color: #2d80ff;
    font-weight: 600;
    font-size: 48px;
    margin-right: 20px;
    cursor: pointer;
  `,
  ContinueButtons: styled.div`
    width: 100%;
    margin: 14px 0;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      position: relative;
      overflow: hidden;
      width: 100%;
      border: none;
      border-radius: 4px;
      outline: none;
      padding: 7px 10px;
      cursor: pointer;

      -webkit-box-shadow: 0.8px 1px 3px 0px rgba(199, 199, 199, 1);
      -moz-box-shadow: 0.8px 1px 3px 0px rgba(199, 199, 199, 1);
      box-shadow: 0.8px 1px 3px 0px rgba(199, 199, 199, 1);

      p {
        color: #fff;
        font-size: 17px;
        font-weight: 400;
      }

      img {
        width: 24px;
        margin-right: 13px;
      }

      &:first-of-type {
        p {
          color: ${black};
        }
        margin-bottom: 10px;
        background-color: #fff;
      }
      &:nth-of-type(2) {
        background-color: #3c5a9a;
      }
    }
  `,
};
