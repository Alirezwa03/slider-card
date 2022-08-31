import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  width: 500px;
  height: 280px;
  padding: 10px 20px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  transform: rotateZ(6deg);
  box-shadow: rgb(126 87 194 / 16%) 0px 4px 12px;
  z-index: 3;
  transition: all 0.5s ease-in 0s;
  direction: rtl;

  @media screen and (max-width: 599px) {
    width: 300px;
    height: 200px;

    p {
      font-size: .9rem
    }

    h1 {
      font-size: 1.2rem
    }
  }

  p {
    font-size: 1.2rem;
    opacity: .7;
    text-align: justify;
    padding: 0 5px 20px;
  }

  &:nth-child(${(props) => props.num}) {
    animation: rotate ease .4s forwards;
  }

  &:nth-child(${(props) =>
        props.arrow
          ? props.num === props.lenght
            ? props.lenght - 1
            : props.num === 1
            ? props.lenght
            : props.num - 1
          : props.lenght === props.num
          ? 1
          : props.num === 1
          ? props.num + 1
          : props.num + 1}) {
    animation: rotateBefore ease 0.4s forwards;
  }

  @keyframes rotate {
    0% {
      transform: translateY(0) rotateZ(-10deg);
    }

    20% {
      transform: translateY(0) rotateZ(-60deg);
    }

    45% {
      transform: translateY(-50%) rotateZ(-60deg);
    }

    60% {
      transform: translateY(-120%) rotateZ(-20deg);
    }

    70% {
      transform: translateY(-150%) rotateZ(-20deg);
      z-index: 10;
    }

    80% {
      transform: translateY(-50%) rotateZ(-20deg);
      z-index: 10;
    }
    
    100% {
      transform: translateY(0) rotateZ(0);
      z-index: 10;
    }
  }

  @keyframes rotateBefore {
    0% {
      transform: translateY(0) rotateZ(0);
      z-index: 10;
    }

    50% {
      transform: translateY(20%) rotate(-3deg);
      z-index: 10;
    }

    100% {
      transform: translateY(0%);
      transform: rotateZ(6deg);
      z-index: 3;
    }
  }

  h1 {
    color: #7e57c2;
    font-size: 1.6rem;
    padding: 10px 0 25px;
  }
`;

const SliderItem = ({ name, number, dataLenght, text, arrow }) => {
  return (
    <>
      <ItemDiv num={number} lenght={dataLenght} arrow={arrow}>
        <h1>{name}</h1>
        <p>{text}</p>
      </ItemDiv>
    </>
  );
};

export default SliderItem;
