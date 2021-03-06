import React from 'react';
import PropTypes from 'prop-types';
import PostTags from '../PostTags/PostTags';
import styled from 'styled-components';
import imageCounter from '../../assets/img/image-counter.png';


const PostInfo = styled.div`
    align-self: end;
    z-index: 50;
    padding: 0 24px;
`
const ImageCounter = styled.span`
    margin-left: -6px;
    color: white;
    font-weight: 100;
`

class ImagePost extends React.Component {
    
    render(){
        const Post = styled.div`
            height: 300px;
            background-image: url(${this.props.images});
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
            &:after {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .15);

            }
        `

        return(
            <Post>
                <PostInfo>
                    <ul>
                        <li>
                            {/* <img src={imageCounter} alt="counter"/> */}
                            {/* <ImageCounter>{this.props.numOfImages}</ImageCounter> */}
                        </li>
                    </ul>
                </PostInfo>
                <PostTags tags={this.props.tags} />
            </Post>
        )
    }
}

ImagePost.propTypes = {
    imageCounter: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.object)
}

export default ImagePost;