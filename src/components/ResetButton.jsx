import React from 'react';
import { CustomButton } from './GenericButton';
import styled from 'styled-components';

const CustomButton3 = styled(CustomButton)`
background-color: #fcac00;
`

const OrangeButton = ({ children, onClick }) => {
    return (<CustomButton3 onClick={onClick}>
        {children}
    </CustomButton3>);
}

export default OrangeButton;