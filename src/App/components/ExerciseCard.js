import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    Card,
    CardBody
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledCustomCard = styled(Card)`
    &&& {
        border-radius: 7px;
        border: #dedede solid thin;
        transition: box-shadow .2s;
        background: ${
        (props) =>
            (props.cardstyle === 'success') ? "linear-gradient(to right, #1bb0b1 0%,#52e8ab 100%)" :
            (props.cardstyle === 'fail') ? "linear-gradient(to right, #c91e76 0%,#ff2a59 100%)" :
            (props.cardstyle === 'pending') ? "linear-gradient(to right, rgba(89,19,142,1) 0%,rgba(43,71,255,1) 100%)" :
            (props.cardstyle === 'draft') ? "linear-gradient(to right, #5994db 0%,#bed8d6 100%);" :
            "#fff"
        };
    }

    &:hover {
        box-shadow: 0 2px 10px rgba(0,0,0,.4), 0 3px 16px rgba(0,0,0,.2);
    }

    & .card .score {
        font-size: 32px;
        margin-left: 10px;
        margin-top: 5px;        
    }

    .score {
        font-weight: 700;
        font-size: 60px;
        margin-top: 10px;
        line-height: 0;
    }

    p,  
    time,
    a,
    a * {
        color: ${
        (props) =>
            (props.cardstyle === 'success' || props.cardstyle === 'fail' || props.cardstyle === 'pending' || props.cardstyle === 'draft') ? "#ffffff !important" :
            "inherit"
        };
    }

    a,
    a * {
        color: blue;
    }

    a.btn-rounded * {
        color: #fff;
    }
    

    a:not(.btn):hover *,
    a:not(.btn):focus *,
    a:not(.btn):active * {
        color: ${
        (props) =>
            (props.cardstyle === 'pending' || props.cardstyle === 'exercise-pending') ? "#12ffd7" : "#0056b3"
        };
    }
`;

class CustomCard extends React.Component {
    
    render() {

        return (
            <StyledCustomCard className="mb-3">

                <CardBody className="d-flex justify-content-between align-items-center" tag={Link} to={'/exercise/' + this.props.exerciseFolder }>
                    <div>
                        <img className="rounded-circle mr-2" src="img/pic.jpg" width="30" height="30" alt="" /> {this.props.exerciseName}
                    </div>
                    <div>{this.props.exerciseState} <FontAwesomeIcon icon="caret-right" className="ml-3" /></div>
                </CardBody>
            </StyledCustomCard>
        );
    }
}

export default CustomCard;