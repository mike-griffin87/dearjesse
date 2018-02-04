import React from 'react';
import {withRouter} from 'react-router-dom';
//import PostTags from '../PostTags/PostTags';
//import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    width: 100%;
    height: 100%;
`
const Header = styled.div`
    width 100%;
    height: 500px;
    display: flex;
    background: pink;
    padding: 0 50px
`

const Panel50 = styled.div`
    width 50%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.right {
        justify-content: flex-end;
        z-index: 10;
        
        &:before {
            content: '';
            width: 50%;
            height: 250px;
            background: #F2F2F2;
            position: absolute;
            right: 0;
            z-index: -1;
            border-top-left-radius: 200px;
            border-bottom-left-radius: 200px;
        }
    }
`

class StoryContainer extends React.Component {
    
    render(){
        const story = this.props.location.state.post;
        // console.log('StoryContainer:' , story);
        return(
            <Container>
                <Header>
                    <Panel50></Panel50>
                    <Panel50 className="right">
                        <h1>{story.title}</h1>
                    </Panel50>
                </Header>
            </Container>
        )
    }
}

StoryContainer.propTypes = {
    // title: PropTypes.string,
    // tags: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(StoryContainer);