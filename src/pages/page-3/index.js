import React from 'react'
import Link from 'gatsby-link'
import Image from './Ali.jpg'
import Button from '../../components/Button'



class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      image: false,
    }
  }

  handleClick() {
    this.setState((prevState) => ({
         clicks: prevState.clicks + 1,
      }));
  }

  handleImage() {
    this.setState((prevState) => ({
         image: !prevState.image
      }));
  }
 
  render () {
    return (
      <div>
      <h1>Alexandra Perkins</h1>
      <p>The count is {this.state.clicks}</p>
      <Button onClick={this.handleClick.bind(this)}>Make the number go up!</Button>
      <Button background={this.state.image === false && ('rebeccapurple') } onClick={this.handleImage.bind(this)}>{this.state.image === true ? 'no pic' : 'pic'}</Button>
      {this.state.image === true && (
        <img src={Image} alt="profile picture"/>
      )}
     
    </div>
    )
  }
}

export default ThirdPage

