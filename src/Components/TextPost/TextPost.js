import React from 'react';

let postCard = {
    background: 'white',
    borderRadius: '6px',
    boxShadow: '0px 0px 8px rgba(0,0,0, .2)'
}

let postContent = {
    padding: '16px',
}

let showingMoreTags = {
    'display': 'inline-block'
}

let noMoreTags = {
    'display': 'none'
}

class TextPost extends React.Component {
    constructor(){
        super();

        this.state = {
            moreTags: true,
            overflowTags: []

        }
    }

    componentWillMount(){
        const numOfAllowedTags = 3;
        let numberOfTags = this.props.tags.length;
        if(numberOfTags > numOfAllowedTags) {
            let updatedOverflowTags = this.props.tags.splice(numOfAllowedTags);
            this.setState({overflowTags: updatedOverflowTags});
        } else if(numberOfTags <= numOfAllowedTags) {
            //this.setState((prevState) => {moreTags: !prevState.moreTags});
            this.setState((prevState) => {
                return {moreTags: !prevState.moreTags}
            });
        }
    }

    render(){
        for(let i=0; i<this.state.overflowTags.length; i++){
            console.log(this.state.overflowTags[i].props.children[1]);
        }
        
        return(
            <div style={postCard}>
                <div style={postContent}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <ul className="postTags">
                        {this.props.tags}
                        <span style={this.state.moreTags ? showingMoreTags : noMoreTags} className="tag-text">
                            {`+ ${this.state.overflowTags.length} more`}
                        </span>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TextPost;