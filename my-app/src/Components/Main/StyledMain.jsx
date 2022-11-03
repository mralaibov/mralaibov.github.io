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

  .title_banner {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;

    h1 {
      font-family: 'Raleway', sans-serif;
      color: white;
      font-size: 82px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 0;
      z-index: 2;
    }
    p {
      color: #fff;
      font-size: 22px;
      font-weight: 300;
      line-height: 30px;
      margin: 0 auto;
      z-index: 2;
    }
    .info_button {
      a {
        width: 600px;
        margin: 0 auto;
        background: white;
      }
    }
  }
`