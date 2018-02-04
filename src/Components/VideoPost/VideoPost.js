import React from 'react';
import PropTypes from 'prop-types';
import PostTags from '../PostTags/PostTags';
import styled from 'styled-components';

const Post = styled.div`
    min-height: 300px;
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 6px;
    box-shadow: 0px 0px 8px rgba(0,0,0, .2);
    overflow: hidden;
    display: grid;
    grid-auto-rows: 1fr auto;
    justify-items: end;
    position: relative;
`

class VideoPost extends React.Component {

    render() {
        return(
            <Post>
                <iframe
                    title={this.props.title}
                    width="100%"
                    height="100%"
                    src={this.props.video}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen>
                </iframe>
                {/* <PostTags tags={this.props.tags} /> */}
            </Post>
        )
    }
}

VideoPost.propTypes = {
    title: PropTypes.string,
    video: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object)
  };

export default VideoPost;