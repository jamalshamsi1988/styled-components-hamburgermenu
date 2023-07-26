import React from 'react'
import styled from 'styled-components';

const Ul =styled.ul`
list-style: none;
display : flex;
justify-content : space-between;
margin : 20px 50px;
z-index : 15;
li{
  padding : 15px 30px;
}
@media (max-width : 768px){
  margin : 0;
  flex-direction : column;
  background: blue;
  position: fixed;
  top : 0;
  left : 0;
  height : 100vh;
  width : 300px;
  padding-top : 3.5rem;
    li{
      color:#fff;
    }
}
`;

const Navbar = () => {
  return (
    <Ul>
      <li>Home Page</li>
      <li>About Us</li>
      <li>Product</li>
      <li>Buy me a coffee</li>
    </Ul>
  )
}

export default Navbar
