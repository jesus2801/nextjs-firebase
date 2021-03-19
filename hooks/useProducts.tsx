import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../firebase/context';
import helpers from '../functions';
import { AppCtx } from '../interfaces';

const useProducts = (order: string) => {
  const [products, setProducts] = useState([]);

  const { firebase }: AppCtx = useContext(FirebaseContext);

  useEffect(() => {
    helpers.handleLoading(true);
    const getProducts = () => {
      firebase.db
        .collection('products')
        .orderBy(order, 'desc')
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

  return {
    products,
  };
};

export default useProducts;
