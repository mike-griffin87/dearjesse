import React from 'react';
import PostTags from '../PostTags/PostTags';
import PostTypeBadge from '../PostTypeBadge/PostTypeBadge';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 6px;
    position: relative;
    box-shadow: 0px 0px 8px rgba(0,0,0, .2);
`

const PostContent = styled.div`
    padding: 24px 24px 48px 24px;
    & h2 {
        margin: 0;
        padding: 0;
    }
`

class StoryPost extends React.Component {
    
    render(){
       const Image = styled.div`
            background-image: url(${this.props.coverImage});
            background-position: center center;
            background-size: cover;
            display: block;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            height: 250px;
        `
        return(
            <PostContainer
                onClick={this.props.onClick}>
                <PostTypeBadge type={this.props.type}/>
                <Image></Image>
                <PostContent>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </PostContent>
                <PostTags tags={this.props.tags} />
            </PostContainer>
        )
    }
}

StoryPost.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object)
}

export default StoryPost;