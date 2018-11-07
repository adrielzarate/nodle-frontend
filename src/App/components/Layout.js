import React from 'react';
import { AppProvider } from '../AppContext';
import styled, { createGlobalStyle } from 'styled-components';

import { 
    Container, 
    Row,
    Col,
    Alert
} from 'reactstrap';

import MainHeader from './MainHeader/';
import MainNavigation from './MainNavigation/';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${ props => props.isOpen ? "hidden" : "visible" };
    main::before {
        content: "";
        display: ${ props => props.isOpen ? "block" : "none" };
        width: 100vw;
        height: 100vh;
        background-color: rgba(25, 1, 56, .8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
  }
`;

const StyledContainer = styled(Container)`
    height: calc( 100vh - 60px );
`;

class Layout extends React.Component {

    state = {
        isOpen: false,
        alertVisible: false,
        alertColor: '',
        alertMsg: ''
    };

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    updateAlert = (alertVisible, alertColor, alertMsg) => {
        this.setState({
            alertVisible,
            alertColor,
            alertMsg
        });

        setTimeout(() => {
            this.dismissAlert();
        }, 2000);
    }

    dismissAlert = () => {
        this.setState({ alertVisible: false });
    }

    render() {

        return (
            <React.Fragment>
                <GlobalStyle isOpen={this.state.isOpen} />
                <MainHeader isOpen={this.state.isOpen} handleClick={this.toggleOpen} />
                <StyledContainer fluid>
                    <Row className="align-items-stretch h-100p">
                        <MainNavigation isOpen={this.state.isOpen} />
                        <Col md="8" xl="10" tag="main">
                            <Row>
                                <Col xs="12">
                                    <Alert 
                                        className="mt-4 mb-0" 
                                        color={this.state.alertColor} 
                                        isOpen={this.state.alertVisible} 
                                        toggle={this.dismissAlert}
                                    >
                                        {this.state.alertMsg}
                                    </Alert>
                                </Col>
                            </Row>
                            <Row className="h-100p">
                                <AppProvider value={this.updateAlert}>
                                    {React.cloneElement(this.props.children, this.props)}
                                </AppProvider>
                            </Row>
                        </Col>
                    </Row>
                </StyledContainer>
            </React.Fragment>
        );
    }
}

export default Layout;