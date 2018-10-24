import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../CustomButton';

const StyledBtnMobileNavToggle = styled(CustomButton)`
    &&& {
        width: 35px;
        height: 35px;
        padding: 0;
        line-height: 0;
        background-color: #fff;
        border: none;
        color: blue;
    }
`;

const BtnMobileNavToggle = ({ isOpen, handleClick }) => (
    <StyledBtnMobileNavToggle onClick={handleClick} className="d-block d-md-none">
        { isOpen ? (
            <FontAwesomeIcon icon="times"/>
        ) : (
            <FontAwesomeIcon icon="bars"/>
        )}
    </StyledBtnMobileNavToggle>
);

export default BtnMobileNavToggle