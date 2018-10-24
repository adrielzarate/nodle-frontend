import React from 'react';

import styled from 'styled-components';

import { Collapse } from 'reactstrap';

import CustomButton from '../CustomButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMainNavigation = styled.nav`

    &&& {
        padding: 40px 20px;

        @media (max-width: 768px) {
            position: absolute;
            left: ${ props => props.isOpen ? "0" : "-280px" };
            z-index: 2;
            background-color: #f3f6f9;
            width: 280px;
            height: calc(100% - 59px);
            transition: .5s ease;
        }
    }
`;

const StyledButton = styled(CustomButton)`
    &&& {
        color: blue;
        background-color: transparent;
        border-color: transparent;
        margin-bottom: 0;
        margin-top: .5rem;
        font-family: 'Khula', sans-serif;
        font-weight: 400;
        width: 100%;

        &:hover,
        &:focus,
        &:active {
            background-color: #fff;
        }
    }
`;

class MainNavigation extends React.Component {

    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (  
            <StyledMainNavigation isOpen={this.props.isOpen} className="col-md-4 col-xl-2 d-flex align-items-start flex-column">
                <StyledButton color="primary" className="d-flex justify-content-between align-items-center" onClick={this.toggle}>
                    <div><FontAwesomeIcon icon="file-signature" className="mr-2" /> Unidades</div>
                    <span>4</span>
                </StyledButton>
                <Collapse isOpen={this.state.collapse}>
                    <StyledButton className="d-block text-left">
                        <FontAwesomeIcon icon="plus-circle" className="mr-2" />
                        <div className="d-inline-block">Agregar Unidad</div>
                    </StyledButton>
                    <StyledButton className="d-block text-left">Nombre Unidad</StyledButton>
                    <StyledButton className="d-block text-left">Nombre Unidad</StyledButton>
                </Collapse>
                <StyledButton color="primary" tag="a" className="d-flex justify-content-between align-items-center">
                    <div><FontAwesomeIcon icon="user-graduate" className="mr-2" /> Alumnos</div>
                    <span>30</span>
                </StyledButton>
                <StyledButton color="primary" tag="a" className="d-flex justify-content-between align-items-center">
                    <div><FontAwesomeIcon icon="chalkboard-teacher" className="mr-2" /> Colaboradores</div>
                    <span>2</span>
                </StyledButton>
                <StyledButton color="primary" tag="a" className="d-flex justify-content-between align-items-center">
                    <div><FontAwesomeIcon icon="file-alt" className="mr-2" /> Generar reporte</div>
                </StyledButton>
                <StyledButton color="primary" tag="a" className="d-flex justify-content-between align-items-center mb-auto">
                    <div><FontAwesomeIcon icon="cog" className="mr-2" /> Settings</div>
                </StyledButton>
            </StyledMainNavigation>
        );
    }
}

export default MainNavigation;