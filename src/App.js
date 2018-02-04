import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import StoryPost from './Components/StoryPost/StoryPost';
import StoryContainer from './Components/StoryContainer/StoryContainer';
import PostCollection from './Components/PostCollection/PostCollection';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <Route  exact path='/' component={PostCollection} />
          <Route  path='/story' render={() => (<StoryContainer />)} />
        </div>
    );
  }
}

export default App;
