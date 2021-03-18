import { ProductState } from './states';
import firebase from 'firebase';
import { Firebase } from '../firebase/firebase';

interface comment {
  message: string;
  userID: string;
  userName: string;
}

export interface Product extends ProductState {
  fullPath: string;
  votes: string[];
  user: string;
  comments: comment[];
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
