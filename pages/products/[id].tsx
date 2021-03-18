import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import helpers from '../../functions';

import { FirebaseContext } from '../../firebase';
import { FirebaseCtx, ProductLayout } from '../../interfaces';

import Layout from '../../components/layout/Layout';
import Styles from '../../styles/components/layout/Product';
import ExtraStyles from '../../styles/components/out/Forms';
import Swal from 'sweetalert2';

const Product = () => {
  //component states
  const [product, setProduct]: any = useState({});

  //router state
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //firebase context
  const { firebase, user }: FirebaseCtx = useContext(FirebaseContext);

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
    // user,
    hearts,
    company,
    price,
  }: ProductLayout = product;

  /*
    url,
    user, *
  */

  const voteProduct = () => {
    if (!user) {
      router.push('/login');
    }

    if (votes.includes(user.uid)) {
      Swal.fire(
        'Error!',
        'You have already voted on this product, you cannot do it again.',
        'error'
      );
      return;
    }

    const newVotes: string[] = [...votes, user.uid];

    firebase.db
      .collection('products')
      .doc(id as string)
      .update({ votes: newVotes })
      .catch(() => {
        Swal.fire(
          'Error!',
          'Sorry we were unable to register your vote, please try again later',
          'error'
        );
      });

    //update state
    setProduct({
      ...product,
      votes: newVotes,
    });
  };

  const heartToProduct = () => {
    if (!user) {
      router.push('/login');
    }

    if (hearts.includes(user.uid)) {
      Swal.fire(
        'Error!',
        'You have already given this product a heart, you cannot do it again.',
        'error'
      );
      return;
    }

    const newHearts: string[] = [...hearts, user.uid];

    firebase.db
      .collection('products')
      .doc(id as string)
      .update({ hearts: newHearts })
      .catch(() => {
        Swal.fire(
          'Error!',
          "sorry, we couldn't register your heart, please try again later",
          'error'
        );
      });

    //update state
    setProduct({
      ...product,
      hearts: newHearts,
    });
  };

  return (
    <Layout>
      <Styles.Title>{name}</Styles.Title>
      <Styles.ProductCtn>
        <Styles.Image>
          <img src={image} alt={name} />
          {user && (
            <>
              <h2>Add your comment</h2>

              <form>
                <textarea placeholder="Enter your comment"></textarea>
                <ExtraStyles.Submit
                  type="submit"
                  onClick={helpers.createRipple}
                >
                  Comment
                </ExtraStyles.Submit>
              </form>
            </>
          )}

          <h2>Comments</h2>
        </Styles.Image>
        <Styles.InfoCtn>
          <p className="created">
            created {helpers.convertToDate(Date.now() - created)} ago - by
            USERNAME from {company}
          </p>
          <div className="info">
            <p>
              <b>Category:</b> {category}
            </p>

            <p>
              <b>Description:</b> {description}
            </p>

            <p>
              <b>Price:</b> {price}
            </p>

            <div>
              <b>URL:</b>{' '}
              {/* <a href={url} target="_blank">
                {url}
              </a> */}
            </div>
          </div>
          <div className="buttons">
            {user ? (
              <>
                <ExtraStyles.Submit
                  onClick={e => {
                    helpers.createRipple(e);
                    voteProduct();
                  }}
                >
                  {votes ? votes.length : '0'} votes
                </ExtraStyles.Submit>
                <ExtraStyles.Submit
                  onClick={e => {
                    helpers.createRipple(e);
                    heartToProduct();
                  }}
                  style={{
                    backgroundColor: '#ff1330',
                    marginTop: '20px',
                  }}
                >
                  {hearts ? hearts.length : '0'} hearts
                </ExtraStyles.Submit>
              </>
            ) : (
              <>
                <ExtraStyles.Submit
                  style={{ opacity: '0.8', cursor: 'not-allowed' }}
                >
                  {votes ? votes.length : '0'} votes
                </ExtraStyles.Submit>
                <ExtraStyles.Submit
                  style={{
                    backgroundColor: '#ff1330',
                    marginTop: '20px',
                    opacity: '0.8',
                    cursor: 'not-allowed',
                  }}
                >
                  {hearts ? hearts.length : '0'} hearts
                </ExtraStyles.Submit>
              </>
            )}
          </div>
        </Styles.InfoCtn>
      </Styles.ProductCtn>
    </Layout>
  );
};

export default Product;
