import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const _Button = styled.button`
    background: rgba(244,96,54, .8);
    padding: 8px 14px;
    margin: 15px;
    border: 2px solid #F46036;
    border-radius: 50px;
    color: white;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;

    &:active {
        background: #BC4624;
    }
`

const Button = ({text, url}) => <_Button>{text}</_Button>

Button.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Button;