import React from 'react';
import styled from 'styled-components';


export const CustomButton = styled.button`
padding: 8px 14px;
border-radius: 5px;
margin: 20px;
font-size: 1.5rem;
color: white;
font-weight: bold;
`

const GenericButton = ({ children, onClick }) => {
    return (
        <CustomButton onClick={onClick}>
            {children}
        </CustomButton>
    );
}

export default GenericButton;