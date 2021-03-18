import styled from '@emotion/styled';
import { black, blue } from '../index';

export default {
  MainZone: styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
      width: 90%;
    }
  `,

  Header: styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin-bottom: 20px;

    -webkit-box-shadow: 0px 3px 4px 0px rgba(217, 217, 217, 1);
    -moz-box-shadow: 0px 3px 4px 0px rgba(217, 217, 217, 1);
    box-shadow: 0px 3px 4px 0px rgba(217, 217, 217, 1);

    @media (max-width: 900px) {
      position: fixed;
      top: 0;
      width: 280px;
      background-color: #fff;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      z-index: 9;
    }
  `,

  Nav: styled.nav`
    a {
      position: relative;
      text-decoration: none;
      color: ${black};
      padding: 0 1px;
    }

    a:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: translateY(4px);
      width: 0%;
      content: '.';
      color: transparent;
      background: ${blue};
      height: 2px;
      border-radius: 10px;
      transition: width 300ms ease;
    }
    a:hover:after {
      width: 100%;
    }

    a:not(:last-child) {
      margin-right: 30px;
    }

    @media (max-width: 900px) {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      a {
        margin: 0 0 15px 0;
      }
    }
  `,

  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      margin-right: 15px;
      font-weight: 300;
    }

    button {
      border: none;
      outline: none;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      background-color: ${blue};
      padding: 6px 20px;
      border-radius: 2px;
      font-weight: 300;
      font-size: 16px;
      color: #fff;
      cursor: pointer;

      -webkit-box-shadow: 0px 1px 3px 0px rgba(222, 222, 222, 1);
      -moz-box-shadow: 0px 1px 3px 0px rgba(222, 222, 222, 1);
      box-shadow: 0px 1px 3px 0px rgba(222, 222, 222, 1);

      &:first-of-type {
        margin-right: 20px;
        background-color: ${black};
      }
    }
    @media (max-width: 900px) {
      margin-top: 20px;
      flex-direction: column;
      p{
        margin-bottom: 14px;
      }
    }
  `,

  Search: styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 8px;
    transition: border 300ms ease;
    &.active {
      border: 1px solid #3191ff;
    }
    input {
      width: calc(100% - 20px - 15px);
      border: none;
      outline: none;
      font-size: 15px;
      color: #1e252e;
    }
    object {
      margin-left: 15px;
      width: 20px;
    }
  `,
};
