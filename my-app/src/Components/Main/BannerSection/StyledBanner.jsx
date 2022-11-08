import styled from "styled-components";

export const StyledBanner = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding-top: 200px;
  padding-bottom: 200px;
  width: 600px;
  margin: auto;
  display: block;

  h1 {
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 71px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0;
    z-index: 2;
  }

  p {
    color: white;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    margin: 0 auto;
    z-index: 2;
  }

  .info_button {
    margin-top: 40px;

    a {
      text-transform: uppercase;
      padding: 14px 34px;
      letter-spacing: 1px;
      margin: 0;
      font-size: 15px;
      font-weight: 500;
      border-radius: 25px;
      color: #fff;
      background-color: #6372ff;
      z-index: 2;
      transition: all 0.5s linear;
      background-color: #5ca9fb;
      background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);

      &:hover {
        color: #fff;
        background-image: none;
        background-color: #6372ff;
      }
    }
  }
`