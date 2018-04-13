import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Avatar } from 'gestalt'
import { IconButton } from 'gestalt'

const Nav = () => (
  <NavWrapper>
    <StyledLink to="/">P</StyledLink>
    <StyledLink to="/page-2">Home</StyledLink>
    <StyledLink to="/page-3">Alexandra</StyledLink>
    <StyledLink to="/cardipage">CardiPage</StyledLink>  
  </NavWrapper>
)

export default Nav

const NavWrapper = styled.nav`
height:60px;
background: lightcyan;
border-bottom: 3px solid #ccc;
text-align: center;
display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;
  padding: 15px 15px;
  text-align:center;
`
