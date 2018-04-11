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
    <Avatar
    size="md"
    src="https://i.pinimg.com/avatars/long_1468294555_444.jpg"
    name="Long"
    />
    <IconButton
    accessibilityLabel="Love"
    bgColor="white"
    icon="heart"
    iconColor="red"
    onClick={() => { console.log('❤️')}}
    />     
  </NavWrapper>
)

export default Nav

const NavWrapper = styled.nav`
height:60px;
background: rebeccapurple;
border-bottom: 3px solid #ccc;
`

const StyledLink = styled(Link)`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;
  padding: 10px;
`