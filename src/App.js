import React, { Component } from 'react';
import './App.css';
import TextPost from './Components/TextPost/TextPost';
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
      if(post.type === 'text') {
        return <TextPost 
                  key={post.id}
                  title={post.title}
                  text={post.text}
                  tags={post.tags.map((tag) => <li>#{tag}</li>)} />
      } else {
        return <TextPost key={post.id} title="it worked" liked={post.liked}/>
      }
      
    });

    return (
      <div>
        <Hero title="Dear Jesse" />
        <div className="post-container">
          {posts}
        </div>
      </div>
    );
  }
}

export default App;
