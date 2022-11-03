import styled from "styled-components";
import logo from './../../img/banner.jpg';
export const StyledMain = styled.main`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: calc(100vh - 71.6px);
  margin-top: 71.6px;
  position: relative;

  &::after {
    content: "";
    width: 100vw;
    height: calc(100vh - 71.6px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(128, 128, 128, 0.53);
    transition: 0.3s;
    pointer-events: none;
  }
`