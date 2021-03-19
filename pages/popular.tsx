import React from 'react';
import Layout from '../components/layout/Layout';

import useProducts from '../hooks/useProducts';

import { ProductLayout } from '../interfaces';
import ProductDetails from '../components/layout/ProductDetails';

import Styles from '../styles/components/layout/ProductsPreview';

const Popular = () => {
  const { products }: any = useProducts('votes');

  const results = products.sort((a: any, b: any) => {
    if (a.votes.length < b.votes.length) return 1;

    if (a.votes.length > b.votes.length) return -1;

    return 0;
  });

  return (
    <Layout>
      <Styles.ProductsPreviewCtn>
        {results.map((product: ProductLayout) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </Styles.ProductsPreviewCtn>
    </Layout>
  );
};

export default Popular;
