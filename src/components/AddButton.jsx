import React from 'react';
import { CustomButton } from './GenericButton';
import styled from 'styled-components';

const CustomButton1 = styled(CustomButton)`
background-color: #16ab16;
`

const GreenButton = ({ children, onClick }) => {
    return (<CustomButton1 onClick={onClick}>
        {children}
    </CustomButton1>);
}

export default GreenButton;