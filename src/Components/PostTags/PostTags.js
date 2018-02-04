import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let showingMoreTags = {
    'display': 'inline-block'
}

let noMoreTags = {
    'display': 'none'
}

const TagUl = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    background: transparent;
    justify-content: center;
    align-items: flex-end;
    font-weight: 100;
    z-index: 50;
    & li, & span {
        font-size: 12px;
        color: #bbb;
        display: inline-block;
        padding: 12px 8px 12px 8px;
        text-transform: capitalize;
    }
`

class PostTags extends React.Component {
    constructor(){
        super();

        this.state = {
            moreTags: true,
            overflowTags: []

        }
    }

    componentWillMount(){
        if(this.props.tags){
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
        } else {
            this.setState(() => {
            return {moreTags: false}
        });}
    }

    

    render(){
        // GETTING OVERFLOW TAGS IN A USABLE FORM
        // for(let i=0; i<this.state.overflowTags.length; i++){
        //     console.log(this.state.overflowTags[i].props.children[1]);
        // }
        
        return(
            <TagUl>
                {this.props.tags}
                <span
                    style={this.state.moreTags ? showingMoreTags : noMoreTags}>
                    {`+ ${this.state.overflowTags.length} more`}
                </span>
            </TagUl>
        )
    }
}

PostTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object)
}

export default PostTags;