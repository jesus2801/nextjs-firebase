import { ProductState } from './states';
import firebase from 'firebase';
import { Firebase } from '../firebase/firebase';

export interface Product extends ProductState {
  votes: number;
  user: string;
  comments: string[];
  image: string;
  created: number;
  hearts: number;
}

export interface ProductLayout extends Product {
  id: string;
}

export interface FirebaseCtx {
  user: firebase.User;
  firebase: Firebase;
}
