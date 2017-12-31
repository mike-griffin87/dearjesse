import React from 'react';
import Background from '../../assets/img/jesse-hero.png';

let hero = {
    'backgroundImage': `url(${Background})`,
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '60vh',
    'color': 'white'
}

let heroH1 = {
    'padding': '0',
    'margin': '0',
    'fontWeight': '100',
    'textTransform': 'uppercase',
    'letterSpacing': '32px'
}

const Hero = ({title}) => <div style={hero}> <h1 style={heroH1}>{title}</h1> </div>

export default Hero;