import React, { Component } from 'react';
import HeroContainer from '../HeroContainer/HeroContainer';
import TextPost from '../TextPost/TextPost';
import ImagePost from '../ImagePost/ImagePost';
import VideoPost from '../VideoPost/VideoPost';
import StoryPost from '../StoryPost/StoryPost';
import StoryContainer from '../StoryContainer/StoryContainer';
import firebase from '@firebase/app';
import '@firebase/firestore';
import {config} from '../../db-properties';
import styled from 'styled-components';
import MasonryInfiniteScroller from 'react-masonry-infinite';

console.clear();
firebase.initializeApp(config);

const PostsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 25px;
background: #001621;
width: 100%;
height: auto;
padding: 25px;
margin: auto;
`

class PostCollection extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      minPostNum: 10
    }
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("Posts").get().then((querySnapshot) => {
      let tempPosts = [];
      querySnapshot.forEach((doc) => {
        let tempPost = doc.data();
        tempPost.id = doc.id;
        tempPosts.push(tempPost);
       });
       this.setState({posts: tempPosts});       
    });
  }

  handleClick(post){
    // const db = firebase.firestore();
    // let docRef = db.collection("Posts").doc(id);
    // docRef.get().then(function(doc) {
    //     if (doc.exists) { console.log(doc.data()); }
    //     else { console.log("No document!"); } 
    // }).catch(function(error) { console.log("Error:", error); });

    this.props.history.push({
      pathname: '/story',
      search: '?' + post.id,
      state: {
        post: post
      }
    });
  }


  render() {    
    const posts = this.state.posts.map(post => {
      switch(post.type) {
        case 'text':
          return <TextPost 
            key={post.id}
            type={post.type}
            title={post.title}
            subtitle={post.subTitle}
            text={post.text}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        case 'image':
          return <ImagePost
            key={post.id}
            type={post.type}
            title={post.title}
            images={post.coverImage}
            numOfImages={post.images.length}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        case 'video':
          return <VideoPost
            key={post.id}
            type={post.type}
            video={post.videoUrl}
            tags={post.tags.map((tag, i) => <li key={i}>#{tag}</li>)} />
        case 'story':
          return <StoryPost
            onClick={() => this.handleClick(post)}
            coverImage={post.coverImage}
            key={post.id}
            type={post.type}
            title={post.title}
            text={post.text}
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

export default PostCollection;
