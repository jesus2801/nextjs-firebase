import React from 'react';
import { ProductLayout } from '../../interfaces';
import Styles from '../../styles/components/layout/ProductsPreview';

import helpers from '../../functions/index';

const ProductDetails = ({ product }: { product: ProductLayout }) => {
  const {
    category,
    comments,
    company,
    created,
    description,
    hearts,
    id,
    image,
    name,
    price,
    url,
    user,
    votes,
  } = product;

  const date = helpers.convertToDate(Date.now() - created);
  /*
    categoria,
    numero de comentarios,
    creado hace,
    descripcion,
    id,
    image,
    name,
    votes,
  */
  return (
    <Styles.ProductPreview>
      <div className="main">
        <div
          className="foto"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="info">
          <h2>{name}</h2>

          <p className="desc">{description}</p>
          <div className="comments">
            <img src="/static/icons/comment.png" alt="Comment icon" />
            <p>{comments.length} comments</p>
          </div>
          <p className="date">{date} ago</p>
        </div>
      </div>
      <div className="right">
        <div className="votes">
          <span className="image"></span>
          <p>{votes}</p>
        </div>

        <p>{category}</p>
      </div>
    </Styles.ProductPreview>
  );
};

export default ProductDetails;
