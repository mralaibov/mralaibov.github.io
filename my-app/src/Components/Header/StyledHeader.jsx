import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 98vw;
  border-color: rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  background-color: #fff;
  transition: all 0.8s;
  padding: 15px;
  top: 0;
  a {
    text-decoration: none;
    color: initial;
  }
  .navbar {
    .container {
      display: flex;
      justify-content: space-evenly;    
      align-items: center;
    }
    .logo {
      font-family: 'Raleway', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #333;
      text-transform: uppercase;
    }
    .links {
      padding: 10px;
      
      a {
        margin: 20px;
      }
    }
  } 
  
`