import React, { Component } from 'react'
import Navbar from './Navbar';
import  styled  from 'styled-components';

const Div = styled.div`
  width : 2rem;
  highth : 2rem;
  top : 40px;
  position : fixed;
  right : 30px;
  z-index : 20px;
  display : none;
  cursor :pointer;
  @media (max-width:768px){
    display : flex;
    justify-content : space-around;
    flex-direction : column;
  }



`;

 class Burger extends Component {
  render() {
    return (
        <>
      <Div>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <Navbar/>
      </>
    )
  }
}

export default Burger;