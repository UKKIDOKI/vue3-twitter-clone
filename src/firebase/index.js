import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLKj_uTnkrG7eRhxBnDIfCoLvZz3rjoEI",
  authDomain: "twitter-clone-vue3-84b8e.firebaseapp.com",
  projectId: "twitter-clone-vue3-84b8e",
  storageBucket: "twitter-clone-vue3-84b8e.appspot.com",
  messagingSenderId: "416437026557",
  appId: "1:416437026557:web:7a395a22d3c446e7568894",
  measurementId: "G-2KGJSWMCMM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const USER_COLEECTION = db.collection("users");
export const TWEET_COLEECTION = db.collection("tweets");
export const COMMENT_COLLECTION = db.collection("comments");
export const RETWEET_COLLECTION = db.collection("retweets");
export const LIKE_COLLECTION = db.collection("likes");
export const MESSAGE_COLLECTION = db.collection("messages");
