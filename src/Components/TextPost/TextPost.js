import React from 'react';

let postCard = {
    background: 'white',
    borderRadius: '6px',
    boxShadow: '0px 0px 8px rgba(0,0,0, .2)'
}

let postContent = {
    padding: '16px',
}

class TextPost extends React.Component {

    render(){
        return(
            <div style={postCard}>
                <div style={postContent}>
                    <h2>{this.props.title}</h2>
                    <p>text</p>
                </div>
                <div className="tags">
                    <ul>
                        <li>tags</li>
                        <li>{this.props.id}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TextPost;