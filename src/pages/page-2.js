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

const SecondPage = () => (
  <div>
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>About</h1>
                <StyledHeader>A</StyledHeader>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>I'm using this site to practice different React features</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>Payment</h1>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>PayPal, Creditcard</p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>MoreStuff</h1>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>MoreStuff</h1>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>MoreStuff</h1>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h1>MoreStuff</h1>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop Skibbidy Bop </p>
                </AccordionItemBody>
        </AccordionItem>
    </Accordion>
  </div>
)

export default SecondPage

const StyledHeader = styled.div`
font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
right: 0;
text-align: right;
margin-bottom: 1.45rem;
font-weight: bold;
font-size: 4rem;
`