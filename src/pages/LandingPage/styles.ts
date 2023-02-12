import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Geek Hub 
    Description: Project made with react
    ~ *   Landing CSS - Page styles   * ~

            Version: 1.0

    ****************************************/

const Animate = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const MainSpace = styled.main`
  background: var(--color-quinternary);
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
`;

export const Area = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--color-quartenary);
    animation: ${Animate} 25s linear infinite;
    bottom: -150px;
  }

  & > li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  & > li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  & > li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  & > li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  & > li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  & > li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  & > li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  & > li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  & > li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  & > li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;

export const WelcomeSpace = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-8);

  & > h1 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-24);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    text-align: center;
    padding: 40px;
    letter-spacing: 5px;
    line-height: var(--font-line-height-24);
  }
  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    color: var(--color-primary);
    font-weight: var(--font-weight-400);
    text-align: center;
    padding: 0px 40px;
    letter-spacing: 2px;
    line-height: var(--font-line-height-20);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const ButtonToMain = styled(Link)`
  width: 200px;
  height: 60px;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-subtitle-18);
  color: var(--color-primary);
  font-weight: var(--font-weight-400);
  text-decoration: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
