import React from 'react';
import { CustomButton } from './GenericButton';
import styled from 'styled-components';

const CustomButton2 = styled(CustomButton)`
background-color: #cc2121;
`

const RedButton = ({ children, onClick }) => {
    return (<CustomButton2 onClick={onClick}>
        {children}
    </CustomButton2>);
}

export default RedButton;