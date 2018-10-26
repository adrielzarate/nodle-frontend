import React from 'react';
import styled from 'styled-components';

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import CustomButton from './CustomButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledCustomCard = styled(Card)`
    &&& {
        border-radius: 7px;
        border: ${(props) => (props.cardstyle === 'default') ? "#dedede solid thin" : "none"};
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

        const cardtype = this.props.cardtype;
        let cardDOM;

        switch(cardtype) {
            case 'recent':
                cardDOM = <CardBody className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="small">Entregado el <time>12 de Enero a las 10 AM</time></p>
                                <div className="d-flex">
                                    <img className="rounded-circle mr-2" src="/img/user-a.jpg" width="60" height="60" alt="" />
                                    <div>
                                        <CardTitle tag="p">
                                            <CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Nombre Ejercicio</CustomButton>
                                            <CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Nombre Unidad</CustomButton>
                                        </CardTitle>
                                        <p className="card-text"><a href="/">Nombre Apellido Alumno</a></p>
                                    </div>
                                </div>
                            </div>
                            <a className="d-flex align-items-center" href="/">
                                <span className="score mr-1">9</span>
                                <FontAwesomeIcon icon="caret-right" className="ml-3" />
                            </a>
                        </CardBody>;
                break;

            case 'common':
                cardDOM = <CardBody className="d-flex justify-content-between align-items-center" tag="a" href="/">
                            <div>
                                <img className="rounded-circle mr-2" src="img/pic.jpg" width="30" height="30" alt="" /> Nombre Apellido Alumno
                            </div>
                            <div>Falta resolver 1 ejercicio <FontAwesomeIcon icon="caret-right" className="ml-3" /></div>
                            {/* <div className="d-flex align-items-center">Promedio <span className="score">9</span> <FontAwesomeIcon icon="caret-right" className="ml-3" /></div> */}
                        </CardBody>;
                break;

            default:
                cardDOM = <CardBody>{this.props.children}</CardBody>;
                break;
        }

        return (
            <StyledCustomCard cardtype={cardtype} cardstyle={this.props.cardstyle} className="mb-3">
                {cardDOM}
            </StyledCustomCard>
        );
    }
}

export default CustomCard;