import React, { Component } from 'react';
import './App.css';
import TextPost from './Components/TextPost/TextPost';
import firebase from '@firebase/app';
import '@firebase/firestore';


console.clear();

const config = {
  apiKey: "AIzaSyDxGc0_nY8cncC6KtoM-3LeZ9LW8czrEZw",
  authDomain: "dear-jesse.firebaseapp.com",
  databaseURL: "https://dear-jesse.firebaseio.com",
  projectId: "dear-jesse",
  storageBucket: "dear-jesse.appspot.com",
  messagingSenderId: "414503978295"
};

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("Posts").get().then((querySnapshot) => {
      let tempPosts = [];
      querySnapshot.forEach((doc) => {
        tempPosts.push(doc.data());
       });
       this.setState({posts: tempPosts});
    });
  }

  render() {

    const posts = this.state.posts.map(post => {
      if(post.type === 'image') {
        return <TextPost key={post.id} title={post.title} liked={post.liked} />
      } else {
        return <TextPost key={post.id} title="it worked" liked={post.liked}/>
      }
      
    });

    return (
      <div className="post-container">
        {posts}
      </div>
    );
  }
}

export default App;
