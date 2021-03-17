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
  `,
};
