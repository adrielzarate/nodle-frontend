import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

    &::before {
        content:'';
        display: block;
        width: 30px;
        height: 30px;
        border: blue solid 5px;
        border-bottom: transparent solid 5px;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 10px;
    }
`;

const Loading = () => (
    <StyledLoading className="d-flex align-items-center">Cargando</StyledLoading>
);

export default Loading;