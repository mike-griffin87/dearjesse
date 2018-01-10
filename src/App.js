import React, { Component } from 'react';
import './App.css';
import TextPost from './Components/TextPost/TextPost';
import ImagePost from './Components/ImagePost/ImagePost';
import VideoPost from './Components/VideoPost/VideoPost';
import HeroContainer from './Components/HeroContainer/HeroContainer';
import firebase from '@firebase/app';
import '@firebase/firestore';
import {config} from './db-properties';
import styled from 'styled-components';

console.clear();
firebase.initializeApp(config);

const PostsContainer = styled.div`
display: grid;
padding: 32px;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(520px, auto);
grid-gap: 24px;
`

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
        let tempPost = doc.data();
        tempPost.id = doc.id;
        tempPosts.push(tempPost);
        console.log(doc.id)
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
            title={1}
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
        case 'video':
          return <VideoPost
            key={post.id}
            video={post.videoUrl}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        default:
          return <TextPost
            key={post.id}
            title="Oops... something went wrong!"
            text="Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." />
          
      }
    });

    return (
      <div>
        <HeroContainer title="Dear Jesse" />
        <PostsContainer>
          {posts}
        </PostsContainer>
      </div>
    );
  }
}

export default App;
