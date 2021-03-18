import styled from '@emotion/styled';

import { black, blue } from '../index';

export default {
  Title: styled.h2`
    margin: 30px 0 50px 0;
    text-align: center;
    text-transform: uppercase;
    color: ${black};
    font-size: 40px;
  `,

  InfoCtn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .info {
      width: 90%;
      margin-top: 15px;
      p {
        margin: 20px 0;
        font-size: 15px;
        color: ${black};
      }
    }

    .created {
      color: ${black};
      font-size: 14px;
    }

    .buttons {
      margin: 20px 0;
      width: 90%;
    }
  `,

  ProductCtn: styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 58% 42%;
  `,

  Image: styled.div`
    img {
      width: 100%;
    }

    h2 {
      margin: 20px 0;
      color: ${black};
    }

    form {
      width: 100%;
      textarea {
        width: 100%;
        border: 1px solid #dddddd;
        border-radius: 3px;
        padding: 10px;
        outline: none;
        font-size: 15px;
        color: ${black};
        resize: vertical;
        margin-bottom: 20px;
        max-height: 150px;
        min-height: 60px;
        transition: border 300ms ease;
        &:focus {
          border: 1px solid ${blue};
        }
      }
    }
  `,
};
