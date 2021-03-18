import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';

import { Product, ProductLayout } from '../interfaces';
import ProductDetails from '../components/layout/ProductDetails';

import Styles from '../styles/components/layout/ProductsPreview';

import useProducts from '../hooks/useProducts';

const Search = () => {
  const router = useRouter();
  let {
    query: { q },
  } = router;

  //all products
  const { products } = useProducts('created');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (q && products) {
      const s = q as string;
      const search = s.toLowerCase();
      const filter = products.filter((product: Product) => {
        return (
          product.name.toLowerCase().indexOf(search) >= 0 ||
          product.description.toLowerCase().indexOf(search) >= 0
        );
      });
      setResults(filter);
    }
  }, [q, products]);

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

export default Search;
