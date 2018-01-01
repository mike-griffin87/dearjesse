import React from 'react';
import PostTags from '../PostTags/PostTags'

let postCard = {
    background: 'white',
    borderRadius: '6px',
    boxShadow: '0px 0px 8px rgba(0,0,0, .2)'
}

let postContent = {
    padding: '24px 24px 48px 24px',
}

class TextPost extends React.Component {

    render(){
        return(
            <div className="post-container" style={postCard}>
                <div style={postContent}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
                <PostTags tags={this.props.tags} />
            </div>
        )
    }
}

export default TextPost;