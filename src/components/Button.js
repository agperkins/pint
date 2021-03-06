import React from 'react'
import styled from 'styled-components'


const Button = styled.button.attrs({
  background: props => props.background || 'black'
})
`
color: white;
font-size: 16px;
text-align: center;
font-weight: 700;
line-height: 1.2;
letter-spacing: -.4px;
background-color: ${props => props.background};
font-family: -apple-system, sans-serif;
padding: 15px;
`
export default Button