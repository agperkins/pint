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
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h2>About</h2>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>I'm using this site to practice different React features</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h2>Payment</h2>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>PayPal, Creditcard</p>
                </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h2>MoreStuff</h2>
            </AccordionItemTitle>
                <AccordionItemBody>
                <p>It looks nicer</p>
                </AccordionItemBody>
        </AccordionItem>
    </Accordion>
  </div>
)

export default SecondPage
