import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Geek Hub - Login Space
    Description: Personal Project
    ~ *   Login Page styles   * ~

            Version: 1.0

****************************************/

const FloatsUp = keyframes`
  0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
`;

export const LoginSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  background-color: var(--color-grey-1);

  & > img {
    margin-bottom: 20px;
  }
`;

//--------------------~>   Skip line   <~--------------------

/*----------------------------
~* Login Page Customization *~
------------------------------*/

export const DataStructure = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1001;
  box-shadow: 0px 0px 10px 5px var(--color-primary);

  & > span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-600);
    color: var(--color-white-mode);
  }

  @media screen and (min-width: 480px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      width: 450px;
    }
  }
`;

export const RegisterBtn = styled(Link)`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-14);
  font-weight: var(--font-weight-500);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
  cursor: pointer;
`;

export const FormStructure = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    letter-spacing: 3px;
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
  }

  & > button {
    width: 100%;
    height: 40px;
    background-color: var(--color-bubbles-pink);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    cursor: pointer;
  }
`;

export const DataSpaceInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;

  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
  }

  & > input,
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }

  & > input::placeholder {
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }

  & > input:focus::placeholder {
    color: transparent;
  }

  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }

  & > p {
    color: var(--color-grey-0);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
  }
`;

export const LightSpace = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;

export const Lights = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 7s infinite linear;
  -moz-animation: ${FloatsUp} 7s infinite linear;
  -o-animation: ${FloatsUp} 7s infinite linear;
  animation: ${FloatsUp} 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
`;
export const Lights2 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 2.5s infinite linear;
  -moz-animation: ${FloatsUp} 2.5s infinite linear;
  -o-animation: ${FloatsUp} 2.5s infinite linear;
  animation: ${FloatsUp} 2.5s infinite linear;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -o-transform: scale(0.5);
  transform: scale(0.5);
  left: 15%;
`;
export const Lights3 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.5s infinite linear;
  -moz-animation: ${FloatsUp} 4.5s infinite linear;
  -o-animation: ${FloatsUp} 4.5s infinite linear;
  animation: ${FloatsUp} 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -15%;
`;
export const Lights4 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 8s infinite linear;
  -moz-animation: ${FloatsUp} 8s infinite linear;
  -o-animation: ${FloatsUp} 8s infinite linear;
  animation: ${FloatsUp} 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -34%;
`;
export const Lights5 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 3s infinite linear;
  -moz-animation: ${FloatsUp} 3s infinite linear;
  -o-animation: ${FloatsUp} 3s infinite linear;
  animation: ${FloatsUp} 3s infinite linear;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  left: -57%;
`;
export const Lights6 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 5.3s infinite linear;
  -moz-animation: ${FloatsUp} 5.3s infinite linear;
  -o-animation: ${FloatsUp} 5.3s infinite linear;
  animation: ${FloatsUp} 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: -81%;
`;
export const Lights7 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.7s infinite linear;
  -moz-animation: ${FloatsUp} 4.7s infinite linear;
  -o-animation: ${FloatsUp} 4.7s infinite linear;
  animation: ${FloatsUp} 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 37%;
`;
export const Lights8 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.1s infinite linear;
  -moz-animation: ${FloatsUp} 4.1s infinite linear;
  -o-animation: ${FloatsUp} 4.1s infinite linear;
  animation: ${FloatsUp} 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 62%;
`;
export const Lights9 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 2s infinite linear;
  -moz-animation: ${FloatsUp} 2s infinite linear;
  -o-animation: ${FloatsUp} 2s infinite linear;
  animation: ${FloatsUp} 2s infinite linear;
  -webkit-transform: scale(2.3);
  -moz-transform: scale(2.3);
  -o-transform: scale(2.3);
  transform: scale(2.3);
  left: 85%;
`;
