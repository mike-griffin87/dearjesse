import React from 'react';
import PostTags from '../PostTags/PostTags'
import imageCounter from '../../assets/img/image-counter.png';


class ImagePost extends React.Component {

    render(){
        let coverPhoto = {
            backgroundImage: `url(${this.props.images})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '6px',
            width: '100%',
            height: '100%'
        }

        let postCard = {
            borderRadius: '6px',
            boxShadow: '0px 0px 8px rgba(0,0,0, .2)',
            position: 'relative',
            overflow: 'hidden'
        }

        let overlay = {
            borderRadius: '6px',
            position: 'absolute',
            display: 'block',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: '#003049',
            opacity: '.4',
            boxShadow: '0px 0px 8px rgba(0,0,0, .2)'
        }

        let light = {
            'color': 'white!important'
        }

        let imageInfo = {
            'textAlign': 'right',
            'padding': '0 24px',
            'zIndex': '50'
        }

        return(
            <div
                className="post-container"
                // eslint-disable-next-line
                style={postCard, coverPhoto}
                onClick={this.props.onClick}
            >
                <span style={overlay}></span>
                <div style={imageInfo}>
                    <ul>
                        <li>
                            <img src={imageCounter} alt="counter"/>
                            <span className="num-of-images">{this.props.numOfImages}</span>
                        </li>
                    </ul>
                </div>
                <PostTags style={light} tags={this.props.tags} />
            </div>
        )
    }
}

export default ImagePost;