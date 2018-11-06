import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { 
    Container, 
    Row,
    Col,
    Alert
} from 'reactstrap';

import MainHeader from './MainHeader/';
import MainNavigation from './MainNavigation/';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Unit from '../pages/Unit';
import AddUnit from '../pages/AddUnit';
import Exercise from '../pages/Exercise';
import AddExercise from '../pages/AddExercise';
import Students from '../pages/Students';
import Student from '../pages/Student';
import Asistants from '../pages/Asistants';
import Asistant from '../pages/Asistant';
import AddAssistant from '../pages/AddAssistant';
import GenerateReport from '../pages/GenerateReport';
import RecentDeliveries from '../pages/RecentDeliveries';
import NotFound from '../pages/NotFound';

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

    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            alertVisible: false,
            alertColor: 'danger',
            alertMsg: 'test'
        };
    }

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
                            <Row className="h-100p">

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

                                <Switch>
                                    <Route exact path="/" render={(props) => <Home {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/settings" render={(props) => <Settings {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/unit" render={(props) => <Unit {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/add-unit" render={(props) => <AddUnit {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/exercise/:handle" render={(props) => <Exercise {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/add-exercise" render={(props) => <AddExercise {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/students" render={(props) => <Students {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/student" render={(props) => <Student {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/asistants" render={(props) => <Asistants {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/asistant" render={(props) => <Asistant {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/add-assistant" render={(props) => <AddAssistant {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/generate-report" render={(props) => <GenerateReport {...props} updateAlert={this.updateAlert} />} />
                                    <Route path="/recent-deliveries" render={(props) => <RecentDeliveries {...props} updateAlert={this.updateAlert} />} />
                                    <Route component={NotFound} />
                                </Switch>

                            </Row>
                        </Col>
                    </Row>
                </StyledContainer>
            </React.Fragment>
        );
    }
}

export default Layout;