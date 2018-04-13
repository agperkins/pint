import React from 'react'
import Link from 'gatsby-link'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Obfuscate from 'react-obfuscate'
import {Browser, Terminal, MacTerminal, } from 'react-window-ui'

const cardipage = () => (
  <div>
    <h1>CardiPage</h1>
    <p>Deese is bloody shoes</p>
    <p>
      <ul>
        <li>Phone: <Obfuscate tel='205-454-1234' /><br /></li>
        <li>Email: <Obfuscate email='abc@mail.com' /><br /></li>
        <li>sms: <Obfuscate sms='AIM 123' /><br /></li>
        <li>Facetime: <Obfuscate facetime='face.time' /><br /></li>
      </ul>
    </p>
      
    <Table>
      <Thead>
        <Tr>
          <Th>Songs</Th>
          <Th>Year</Th>
          <Th>Album</Th>
          <Th>How much love</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
            <Td>Bodak Yellow</Td>
            <Td>2017</Td>
            <Td>Daddy K - The Mix 11</Td>
            <Td>7</Td>
        </Tr>
        <Tr>
            <Td>MotorSport</Td>
            <Td>2018</Td>
            <Td>Culture II</Td>
            <Td>8</Td>
        </Tr>
        <Tr>
            <Td>Washpoppin</Td>
            <Td>2016</Td>
            <Td>Gangsta Bitch Music, Vol. 1</Td>
            <Td>10</Td>
        </Tr>
      </Tbody>
    </Table>
    <Terminal>
		<h3>Terminal</h3>
		<p>Use {'<Terminal/>'} to frame terminal content on the CardiPage!</p>
	</Terminal>
  </div>

)

export default cardipage
