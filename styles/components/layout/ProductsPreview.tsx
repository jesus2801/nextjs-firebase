import styled from '@emotion/styled';

import { black, blue } from '../index';

export default {
  ProductsPreviewCtn: styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  ProductPreview: styled.li`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 20px;
    background-color: #fff;

    -webkit-box-shadow: 1px 4px 4px 0px rgba(207, 207, 207, 1);
    -moz-box-shadow: 1px 4px 4px 0px rgba(207, 207, 207, 1);
    box-shadow: 1px 4px 4px 0px rgba(207, 207, 207, 1);

    .main {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      .foto {
        width: 180px;
        height: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 30px;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h2 {
          position: relative;
          color: ${black};
          text-transform: uppercase;
          margin-bottom: 10px;
          font-size: 26px;
          &::after {
            content: '';
            display: block;
            width: 40%;
            height: 5px;
            border-radius: 100px;
            background-color: ${blue};
          }
        }

        .desc {
          color: #363636;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .comments {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          img {
            width: 24px;
            margin-right: 8px;
          }

          p {
            color: ${black};
            font-size: 15px;
          }
        }

        .date {
          color: ${black};
          font-size: 15px;
        }
      }
    }

    .right {
      width: 10%;
    }
  `,
};