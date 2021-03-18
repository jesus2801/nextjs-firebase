import React from 'react';
import Layout from '../components/layout/Layout';

import useProducts from '../hooks/useProducts';

import { ProductLayout } from '../interfaces';
import ProductDetails from '../components/layout/ProductDetails';

import Styles from '../styles/components/layout/ProductsPreview';

const Home = () => {
  const { products } = useProducts('created');

  return (
    <Layout>
      <Styles.ProductsPreviewCtn>
        {products.map((product: ProductLayout) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </Styles.ProductsPreviewCtn>
    </Layout>
  );
};

export default Home;
