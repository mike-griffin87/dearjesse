import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = styled.div`
    color: rgba(0,48,73, .5);
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 500;
    background-color: rgba(0,48,73, .2);
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    right: 8px;

`

const PostTypeBadge = ({type}) => <Badge><h3>{type} post</h3></Badge>

PostTypeBadge.propTypes = {
    type: PropTypes.string.isRequired
}

export default PostTypeBadge;