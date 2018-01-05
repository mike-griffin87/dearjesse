import React from 'react';
import PostTags from '../PostTags/PostTags';
import styled from 'styled-components';

const PostContainer = styled.div`
    display: grid;
    background: white;
    border-radius: 6px;
    position: relative;
    box-shadow: 0px 0px 8px rgba(0,0,0, .2);
`
const PostContent = styled.div`
    padding: 24px 24px 48px 24px;
`

class TextPost extends React.Component {

    render(){
        return(
            <PostContainer>
                <PostContent>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </PostContent>
                <PostTags tags={this.props.tags} />
            </PostContainer>
        )
    }
}

export default TextPost;