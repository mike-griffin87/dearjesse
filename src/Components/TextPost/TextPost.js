import React from 'react';
import PropTypes from 'prop-types';
import PostTags from '../PostTags/PostTags';
import PostTypeBadge from '../PostTypeBadge/PostTypeBadge';
import styled from 'styled-components';

const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 88% 12%;
    align-items: center;
    height: 300px;
    background: white;
    border-radius: 6px;
    position: relative;
    box-shadow: 0px 0px 8px rgba(255,255,255, .8);
`
const PostContent = styled.div`
    text-align: center;

    & h2 {
        text-transform: uppercase;
    }

    & p {
        color: #003049;
        font-weight: 100;
    }
`

class TextPost extends React.Component {

    render(){
        return(
            <PostContainer>
                <PostTypeBadge type={this.props.type}/>
                <PostContent>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.subtitle}</p>
                </PostContent>
                <PostTags tags={this.props.tags} />
            </PostContainer>
        )
    }
}

TextPost.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object)
}

export default TextPost;