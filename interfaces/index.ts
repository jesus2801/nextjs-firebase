import { ProductState } from './states';
import firebase from 'firebase';
import { Firebase } from '../firebase/firebase';

export interface Product extends ProductState {
  votes: string[];
  user: string;
  comments: string[];
  image: string;
  created: number;
  hearts: string[];
}

export interface ProductLayout extends Product {
  id: string;
}

export interface FirebaseCtx {
  user: firebase.User;
  firebase: Firebase;
}
