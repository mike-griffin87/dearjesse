import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../assets/img/jesse-hero.png';
import styled from 'styled-components';

const Title = styled.h1`
    padding: 0;
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 32px;
    color: white;
    text-align: center;
`
const Hero = styled.div`
    background: pink;
    background-image: url(${Background});
    background-size: cover;
    background-position: center center;
    display: grid;
    justify-content: center;
    align-content: center;
    height: 60vh;
`

const HeroContainer = ({title}) => <Hero><Title>{title}</Title></Hero>

HeroContainer.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeroContainer;