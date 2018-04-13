import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/Button'
import ReactDOM from 'react-dom';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/minimal-example.css';

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
                <AccordionItemBody>
                <p>PayPal, Creditcard</p>
                </AccordionItemBody>
            </AccordionItemTitle>
        </AccordionItem>
    </Accordion>
  </div>
)

export default SecondPage