import firebaseConfig from './config';
import app from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export class Firebase {
  public auth: app.auth.Auth;
  private googleProvider: app.auth.GoogleAuthProvider;
  private facebookProvider: app.auth.FacebookAuthProvider;
  public db: app.firestore.Firestore;
  public storageRef: app.storage.Reference;

  constructor() {
    // Initialize Firebase
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.db = app.firestore();
    this.storageRef = app.storage().ref();
  }

  public async register(name: string, mail: string, password: string) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      mail,
      password
    );

    return await newUser.user!.updateProfile({
      displayName: name,
    });
  }

  public async login(mail: string, password: string) {
    return this.auth.signInWithEmailAndPassword(mail, password);
  }

  public async signInGoogle(): Promise<void> {
    const response = await this.auth.signInWithPopup(this.googleProvider);
    console.log(response.credential);
    console.log(response.user);
  }

  public async signInFacebook(): Promise<void> {
    const response = await this.auth.signInWithPopup(
      this.facebookProvider
    );
    console.log(response.credential);
    console.log(response.user);
  }

  public async signOff() {
    await this.auth.signOut();
  }
}

export default new Firebase();
