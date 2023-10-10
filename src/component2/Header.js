import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="images/logo2.png" alt="My logo img"  />
            </NavLink>
        </MainHeader>

    );
};

const MainHeader = styled.header`
padding:0.4rem;
height:10rem;
background-color: ${({ theme }) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo{
    height:5rem;
}
// @media (max-width:${({ theme }) => theme.media.mobile})
// {

// }
`;

export default Header
