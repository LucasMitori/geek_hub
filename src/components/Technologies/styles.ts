import styled, { keyframes } from "styled-components";
import Modal from "react-bootstrap/Modal";

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Cube = keyframes`
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
`;

const Pulse = keyframes`
  0% { box-shadow: 0 0 0 0 var(--color-primary); }
`;

export const TechSpace = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-3);
  position: relative;
  background: linear-gradient(
    132deg,
    var(--color-grey-5),
    var(--color-grey-3),
    var(--color-grey-1)
  );
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;
  overflow: hidden;
  padding: 0;
  margin: 0px;
  z-index: 1;

  & > li {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px var(--color-primary);
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: ${Cube} 12s ease-in forwards infinite;
    list-style: none;
    z-index: -1;
  }

  & > li:nth-child(2n) {
    border-color: var(--color-primary);
  }
  & > li:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  & > li:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  & > li:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  & > li:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  & > li:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
  & > li:nth-child(7) {
    animation-delay: 5s;
    left: 5vw;
    top: 10vh;
  }
  & > li:nth-child(8) {
    animation-delay: 7s;
    left: 40vw;
    top: 50vh;
  }
  & > li:nth-child(9) {
    animation-delay: 4s;
    left: 60vw;
    top: 60vh;
  }

  @media screen and (min-width: 480px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    & {
      padding: 0 100px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      padding: 0 200px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      padding: 0 300px;
    }
  }
`;

export const TechTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
  }

  & > button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: var(--radius-4);
    background-color: var(--color-grey-2);
  }

  @media screen and (min-width: 480px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    & {
      padding: 0px 15px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      padding: 0px 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      padding: 0px 15px;
    }
    @media screen and (max-width: 1920px) {
      & {
        padding: 0px 30px;
      }
    }
  }
`;

export const TechCardSpace = styled.article`
  width: 90%;
  height: 80%;
  background-color: var(--blur-effect-02);
  margin: 0 auto;
  padding: 22px 0px;
  z-index: 1001;
  box-shadow: 0px 0px 10px 5px var(--color-primary);
  border-radius: var(--radius-8);
`;

export const TechCard = styled.button`
  width: 80%;
  height: 60px;
  background-color: var(--color-grey-3);
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
  margin-bottom: 20px;
  cursor: pointer;

  &:hover,
  &:focus {
    animation: ${Pulse} 1s;
    box-shadow: 0 0 0 2em transparent;
    background-color: var(--color-navigation);
  }

  & > h3 {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
  }

  & > h4 {
    font-family: var(--font-secondary-inter);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-400);
    font-size: var(--font-text-14);
    letter-spacing: 2px;
  }
`;

export const ModalSpace = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-transparent-01);
  z-index: 1000;
`;

export const ModalSCard = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-2);
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-8);

  & > div {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-8) var(--radius-8) 0px 0px;
  }

  & > div > button {
    background-color: var(--color-grey-3);
    border: none;
    cursor: pointer;
  }

  & > div > h2 {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-700);
    font-size: var(--font-text-16);
  }

  & > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 0 15px;
  }

  & > form > label {
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-400);
    font-size: var(--font-text-12);
  }

  & > form > input,
  & > form > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    padding-left: 10px;
    color: var(--color-white-mode);
  }

  & > form > select > input:focus,
  & > form > select > select:focus {
    outline: none;
    border: 1px solid var(color-quartenary);
    background-color: var(--color-grey-4);
  }

  & > form > input::placeholder {
    color: var(--color-grey-0);
  }

  & > form > input:focus::placeholder {
    color: transparent;
  }

  & > form > select:valid {
    color: var(--color-grey-0);
  }

  & > form > button {
    width: 100%;
    height: 40px;
    background-color: var(--color-bubbles-pink);
    font-family: var(--font-secondary-inter);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-500);
    font-size: var(--font-text-12);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    cursor: pointer;
  }

  & > form > button:hover {
    animation: ${Pulse} 1s;
    box-shadow: 0 0 0 2em transparent;
    background-color: var(--color-navigation);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const BtnSpace = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const SalvarAlteracoesBtn = styled.button`
  width: 50%;
  height: 40px;
  background-color: var(--color-bubbles-pink);
  font-family: var(--font-secondary-inter);
  color: var(--color-grey-0);
  font-weight: var(--font-weight-500);
  font-size: var(--font-text-12);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
  cursor: pointer;

  &:hover {
    animation: ${Pulse} 1s;
    box-shadow: 0 0 0 2em transparent;
    background-color: var(--color-navigation);
  }
`;

export const ExcluirBtn = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-4);
  font-family: var(--font-secondary-inter);
  color: var(--color-grey-0);
  font-weight: var(--font-weight-500);
  font-size: var(--font-text-12);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-4);
  cursor: pointer;

  &:hover {
    animation: ${Pulse} 1s;
    box-shadow: 0 0 0 2em transparent;
    background-color: var(--color-navigation);
  }
`;
