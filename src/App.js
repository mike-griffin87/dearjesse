import React, { Component } from 'react';
import './App.css';
import TextPost from './Components/TextPost/TextPost';
import ImagePost from './Components/ImagePost/ImagePost';
import Hero from './Components/Hero/Hero';
import firebase from '@firebase/app';
import '@firebase/firestore';
import {config} from './db-properties';

console.clear();
firebase.initializeApp(config);

// const tags = [
//   'Milestone',
//   'Birthday',
//   'Good times',
//   'Sad times',
//   'First time',
//   'Proud moment'
// ];

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  test() {
    console.log('hello worlds');
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
      switch(post.type) {
        case 'text':
          return <TextPost 
            key={post.id}
            title={post.title}
            text={post.text}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        case 'image':
          return <ImagePost
            onClick={() => this.test()}
            key={post.id}
            title={post.title}
            images={post.coverImage}
            numOfImages={post.images.length}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        default:
          return <TextPost 
            key={post.id}
            title={post.title}
            text={post.text}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
      }
    });

    return (
      <div>
        <Hero title="Dear Jesse" />
        <div className="posts-container">
          {posts}
        </div>
      </div>
    );
  }
}

export default App;
