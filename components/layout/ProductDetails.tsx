import React from 'react';
import { ProductLayout } from '../../interfaces';
import Styles from '../../styles/components/layout/ProductsPreview';
import Link from 'next/link';

import helpers from '../../functions/index';

const ProductDetails = ({ product }: { product: ProductLayout }) => {
  const {
    category,
    comments,
    created,
    description,
    id,
    image,
    name,
    votes,
  } = product;

  const date = helpers.convertToDate(Date.now() - created);

  return (
    <Styles.ProductPreview>
      <div className="main">
        <div
          className="foto"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="info">
          <Link href="/products/[id]" as={`/products/${id}`}>
            <h2>{name}</h2>
          </Link>

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
          <img src="/static/icons/vote.png" alt="Vote icon" />
          <p>{votes.length}</p>
        </div>

        <p>{category}</p>
      </div>
    </Styles.ProductPreview>
  );
};

export default ProductDetails;
