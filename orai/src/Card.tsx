
import React from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
    background-color: blue;  // Háttérszín kék
    padding: 20px;           // Belső margó 20px
    color: white;            // Betűszín fehér
`;

const BoxComponent: React.FC = () => {
    return <StyledBox>This is a styled box!</StyledBox>;
};

export default BoxComponent;


