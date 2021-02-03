import React, { Component } from 'react'
import '../Css/header.css'

 class Header extends Component {
  render() {
    return (
      <ul>
        
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">Service</a></li>
      <li><a href="#contact">About</a></li>
      <li><a href="#about">Login</a></li>
      <li><a href="#about">Register</a></li>
    </ul>
    )
  }
}
export default Header;