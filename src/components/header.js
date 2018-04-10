import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Header = () => (
  <Bar>
    <StyledLink to="/">Page 1</StyledLink>
    <StyledLink to="/page-2">Page 2</StyledLink>
    <StyledLink to="/page-3">Page 3</StyledLink>
  </Bar>
)

export default Header

const Bar = styled.nav`
height: 100px;
border-bottom: 5px solid #ccc;
`

const StyledLink = styled(Link)`
  color: red;
  padding: 10px;
`