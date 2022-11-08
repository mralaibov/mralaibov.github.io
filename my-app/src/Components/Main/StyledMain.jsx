import styled from "styled-components";
import logo from './../../img/banner.jpg';
export const StyledMain = styled.main`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19)), url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: calc(100vh - 71.6px);
  margin-top: 71.6px;
  position: relative;
  
`