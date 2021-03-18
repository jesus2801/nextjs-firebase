import React, {
  useEffect,
  useContext,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
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
  const [comment, setComment]: any = useState({});

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
    user: creatorId,
    fullPath,
    hearts,
    company,
    price,
  }: ProductLayout = product;

  const voteProduct = () => {
    if (!user) {
      router.push('/login');
      return;
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
      return;
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

  //functions for comment
  const commentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const isCreator = (id: string) => id === creatorId;

  const addComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const textarea = document.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;

    if (!user) {
      router.push('/login');
      return;
    }

    if (textarea.value.trim() === '') {
      Swal.fire(
        'Error!',
        'Please, cannot send an empty comment',
        'error'
      );
      return;
    }

    //extra info
    comment.userID = user.uid;
    comment.userName = user.displayName;

    //take copy of comment
    const newComments = [...comments, comment];

    //update db
    firebase.db
      .collection('products')
      .doc(id as string)
      .update({ comments: newComments })
      .then(() => {
        Swal.fire(
          'Comment posted!',
          'Your comment has been published successfully',
          'success'
        );
      })
      .catch(() => {
        Swal.fire(
          'Error!',
          "Sorry, we couldn't upload your comment, please try again later",
          'error'
        );
      });

    //update state
    setProduct({
      ...product,
      comments: newComments,
    });

    textarea.value = '';
  };

  const deleteProduct = async () => {
    if (!user) {
      router.push('/login');
      return;
    }
    if (user.uid !== creatorId) {
      router.push('/');
      return;
    }
    helpers.handleLoading(true);
    try {
      await firebase.db
        .collection('products')
        .doc(id as string)
        .delete();
      await firebase.storageRef.child(fullPath).delete();
      helpers.handleLoading(false);
      router.push('/');
    } catch (e) {
      Swal.fire(
        'Error!',
        'Sorry, we were unable to remove your product, please try again later',
        'error'
      );
    }
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

              <form onSubmit={addComment}>
                <textarea
                  placeholder="Enter your comment"
                  onChange={commentChange}
                  name="message"
                ></textarea>
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

          <ul>
            {comments
              ? comments.map((comment, i) => (
                  <li key={i}>
                    <p className="message">{comment.message}</p>
                    <p className="creator">
                      <b>Publicado por:</b> {comment.userName}
                      {isCreator(comment.userID) && <b> - Creator</b>}
                    </p>
                  </li>
                ))
              : null}
          </ul>
        </Styles.Image>
        <Styles.InfoCtn>
          <p className="created">
            created {helpers.convertToDate(Date.now() - created)} ago -
            from {company}
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

            <div className="link">
              <b>URL: </b>{' '}
              <a href={url} target="_blank">
                {url}
              </a>
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
      {user && isCreator(user.uid) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <ExtraStyles.Submit
            onClick={e => {
              helpers.createRipple(e);
              deleteProduct();
            }}
            style={{ width: '90%' }}
          >
            Delete Project
          </ExtraStyles.Submit>
        </div>
      )}
    </Layout>
  );
};

export default Product;
