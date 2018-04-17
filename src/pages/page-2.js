import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/Button'
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import '../styles/accordion.css'
import hamburger from '../img/hamburger.svg'

const SecondPage = () => (
  <div>
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h2>Hooligans<span style={{float:'right', fontSize: '1.8rem'}}><SVG src={hamburger}/></span></h2>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>I'm using this site to practice different React features</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
            <h2>Menu<span style={{float:'right', fontSize: '1.8rem'}}>C</span></h2>
                </AccordionItemTitle>
                <AccordionItemBody>
                <p>PayPal, Creditcard</p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
            <h2>Locations<span style={{float:'right', fontSize: '1.8rem'}}>C</span></h2>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
            <h2>Contact<span style={{float:'right', fontSize: '1.8rem'}}>C</span></h2>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
            <h2>History<span style={{float:'right', fontSize: '1.8rem'}}>C</span></h2>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
    </Accordion>
  </div>
)

export default SecondPage

const Span = styled.div`

`

const StyledHeader = styled.div`
font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
right: 0;
text-align: right;
font-weight: bold;
font-size: 4rem;
`

const SVG = styled.img`
    height: 40px;
`