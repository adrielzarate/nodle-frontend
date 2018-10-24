import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledButton = styled(Button)`
    &&& {
        padding: 10px 20px 6px;
        border-radius: 100px;

        &.btn-sm {
            padding: 5px 10px 0;
            border-radius: 100px;
            font-size: 12px;
            margin-bottom: 5px;
            margin-left: 3px;
            color: #fff;
        }
    }
`;

const CustomButton = (props) => (
    <StyledButton {...props} />
);

export default CustomButton;