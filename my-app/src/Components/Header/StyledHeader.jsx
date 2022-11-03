import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  border-color: rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  background-color: #fff;
  transition: all 0.8s;
  padding: 15px;
  top: 0;
  z-index: 1;
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
        position: relative;
        &:hover:after {
          width: 100%;
        }
        &:after {
          width: 0;
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 1.5px;
          background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
          transition: width 0.2s;
        }
      }
    }
  } 
  
`