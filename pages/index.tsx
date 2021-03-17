import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import helpers from '../functions/index';

import { FirebaseContext } from '../firebase';
import { FirebaseCtx, ProductLayout } from '../interfaces';
import ProductDetails from '../components/layout/ProductDetails';

import Styles from '../styles/components/layout/ProductsPreview';

const Home = () => {
  const [products, setProducts] = useState([]);

  const { firebase }: FirebaseCtx = useContext(FirebaseContext);

  useEffect(() => {
    helpers.handleLoading(true);
    const getProducts = () => {
      firebase.db
        .collection('products')
        .orderBy('created', 'desc')
        .onSnapshot(handleSnapshots);
    };
    getProducts();
  }, []);

  const handleSnapshots = (snapshot: any) => {
    const products = snapshot.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setProducts(products);
    helpers.handleLoading(false);
  };

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
