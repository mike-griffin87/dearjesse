import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class JesseAge extends React.Component {

    render() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth()+1;
        const eventYear = this.props.eventYear;
        let age = currentYear - eventYear.getFullYear();
        if(currentYear == 2017) {
            let age = currentMonth;
        }

        return(
            <p>Age: {age} {age > 1 ? 'years old' : 'year old'}</p>
        )
    }
}

JesseAge.propTypes = {
    //eventYear: PropTypes.number.isRequired,
}

export default JesseAge;