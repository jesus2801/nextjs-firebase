import styled from '@emotion/styled';

import { black, blue } from '../index';

export default {
  Title: styled.h2`
    margin: 30px 0 50px 0;
    text-align: center;
    text-transform: uppercase;
    color: ${black};
    font-size: 40px;
    @media (max-width: 600px) {
      font-size: 30px;
    }
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
      .link {
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        b {
          font-size: 15px;
          color: ${black};
        }
        a {
          font-size: 15px;
        }
      }
    }

    .created {
      color: ${black};
      font-size: 14px;
      text-align: center;
      margin: 0 auto;
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
    @media (max-width: 900px) {
      grid-template-columns: 100%;
    }
  `,

  Image: styled.div`
    width: 100%;
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

    ul {
      margin: 20px 0;
      li {
        padding: 25px 0;
        border-bottom: 1px solid #dddddd;
        &::marker {
          color: ${blue};
        }
        .message {
          font-size: 15px;
          margin-bottom: 8px;
          color: ${black};
        }
        .creator {
          font-size: 13px;
          color: ${black};
        }
      }
    }
  `,
};
