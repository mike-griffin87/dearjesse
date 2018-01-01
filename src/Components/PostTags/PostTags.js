import React from 'react';

let showingMoreTags = {
    'display': 'inline-block'
}

let noMoreTags = {
    'display': 'none'
}

class PostTags extends React.Component {
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
            <ul className="postTags">
                {this.props.tags}
                <span style={this.state.moreTags ? showingMoreTags : noMoreTags} className="tag-text">
                    {`+ ${this.state.overflowTags.length} more`}
                </span>
            </ul>
        )
    }
}

export default PostTags;