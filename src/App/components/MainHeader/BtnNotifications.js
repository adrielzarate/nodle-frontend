import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '../CustomButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledBtnNotifications = styled(CustomButton)`
    &&& {
        width: 35px;
        height: 35px;
        padding: 8px 0 0;
        line-height: 0;
    }

    .fa-bell {
        display: inline;
    }
`;

const BtnNotifications = () => (
    <StyledBtnNotifications outline color="primary" tag={Link} to="#"><FontAwesomeIcon icon="bell" /></StyledBtnNotifications>
);

export default BtnNotifications