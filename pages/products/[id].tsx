import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import helpers from '../../functions';

import { FirebaseContext } from '../../firebase';
import { FirebaseCtx } from '../../interfaces';

import Layout from '../../components/layout/Layout';
import Styles from '../../styles/components/layout/Product';

const Product = () => {
  //component states
  const [product, setProduct]: any = useState({});

  //router state
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //firebase context
  const { firebase }: FirebaseCtx = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      helpers.handleLoading(true);
      const getProduct = async () => {
        const query = firebase.db
          .collection('products')
          .doc(id as string);
        const product = await query.get();
        helpers.handleLoading(false);
        if (product.exists) {
          setProduct(product.data()!);
        } else {
          router.push('/404');
        }
      };
      getProduct();
    }
  }, [id]);

  const {
    category,
    comments,
    created,
    description,
    image,
    name,
    votes,
    url,
    user,
    hearts,
    company,
    price,
  } = product;

  /*
    category, 
    created, *
    description, *
    votes, *
    url,
    user, *
    hearts, *
    company, *
    price *
  */

  return (
    <Layout>
      <Styles.Title>{name}</Styles.Title>
      <Styles.ProductCtn>
        <Styles.Image>
          <img src={image} alt={name} />
        </Styles.Image>
        <Styles.InfoCtn>
          <p className="created">
            created {helpers.convertToDate(Date.now() - created)} ago
          </p>
        </Styles.InfoCtn>
      </Styles.ProductCtn>
    </Layout>
  );
};

export default Product;
