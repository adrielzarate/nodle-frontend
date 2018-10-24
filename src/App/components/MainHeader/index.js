import React from 'react';
import styled from 'styled-components';

import {
    Navbar,
    NavbarBrand,
    Container 
} from 'reactstrap';

import BtnNotifications from './BtnNotifications';
import UserSettings from './UserSettings';
import BtnMobileNavToggle from './BtnMobileNavToggle';

const StyledMainHeader = styled.header`
    background: #fff;
    height: 60px;
    h1 {
        font-weight: 700;
        margin-top: 5px;
    }
`;

const MainHeader = ({ isOpen, handleClick }) => (
    <StyledMainHeader>
        <Navbar>
            <Container fluid className="d-flex justify-content-between p-0">
                <NavbarBrand href="/" className="d-flex align-items-center">
                    <img className="rounded-circle mr-2" src="img/pic.jpg" width="30" height="30" alt="" />
                    <h1 className="h4 strong mb-0">Nombre Materia</h1>
                </NavbarBrand>
                <div className="d-none d-md-flex align-items-center">
                    <BtnNotifications />
                    <UserSettings />
                </div>

                <BtnMobileNavToggle isOpen={isOpen} handleClick={handleClick} />

            </Container>
        </Navbar>
    </StyledMainHeader>
);

export default MainHeader;