import styled from '@emotion/styled';
import { black, blue } from '../index';

export default {
  Form: styled.form`
    width: 94%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    padding: 25px 33px;
    background-color: #fff;
    border-radius: 4px;

    -webkit-box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);
    box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);

    h1 {
      color: ${black};
      font-weight: 600;
      margin: 15px 0;
      text-transform: uppercase;
    }
  `,

  FieldSet: styled.fieldset`
    width: 94%;
    max-width: 450px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    padding: 25px 33px;
    background-color: #fff;
    border-radius: 4px;
    transition: all 300ms ease;

    -webkit-box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);
    box-shadow: 1px 4px 5px 0px rgba(204, 204, 204, 1);

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      * {
        cursor: not-allowed;
      }
    }

    legend {
      color: ${black};
      font-weight: 600;
      font-size: 24px;
      text-transform: uppercase;
    }
  `,

  FileInputCtn: styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    input[type='file'] {
      display: none;
    }

    label {
      position: relative;
      overflow: hidden;
      background-color: ${blue};
      padding: 6px 17px;
      margin-right: 10px;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }

    p {
      font-size: 14px;
    }
  `,

  FormGroup: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0;

    label {
      margin-bottom: 7px;
      color: ${black};
      font-size: 14px;
    }

    .input-ctn {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      input,
      textarea {
        position: relative;
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        padding: 5px;
        font-size: 16px;
        &:focus + .line {
          width: 100%;
        }
        &:disabled {
          background-color: transparent;
        }
      }

      textarea {
        resize: vertical;
        max-height: 180px;
        min-height: 45px;
      }

      .line {
        position: relative;
        width: 0px;
        height: 1px;
        background-color: ${blue};
        transition: width 300ms ease;
        transform: translateY(-1px);
      }
    }
  `,

  Submit: styled.button`
    position: relative;
    overflow: hidden;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    padding: 9px 10px;
    background-color: ${blue};
    cursor: pointer;
  `,
};
