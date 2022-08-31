import React, { useState } from "react";
import styled from "styled-components";
import SliderItem from "./SliderItem";

//styles
import styles from "../styles/button.module.scss";

//icon
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";

const ContainerDiv = styled.div`
  position: relative;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const ShowItem = styled.div`
  width: 500px;
  height: 280px;
  padding: 10px 20px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  transform: rotateZ(12deg);
  box-shadow: rgb(126 87 194 / 16%) 0px 4px 12px;
  z-index: 2;
  transition: all 0.5s ease-in 0s;


  @media screen and (max-width: 599px) {
    width: 300px;
    height: 200px;
  }

  p {
    font-size: 1.2rem;
    opacity: .7;
    text-align: justify;
    padding: 0 5px 20px;
  }

  h1 {
    color: #7e57c2;
    font-size: 1.6rem;
    padding: 20px 0 20px;
    font-weight: bold;
  }
`;

const Slider = () => {
  const data = [
    {
      name: 'Titel - 1',
      text: 'description'
    }, 
    {
      name: 'Titel - 2',
      text: 'description'
    }, 
    {
      name: 'Titel - 3',
      text: 'description'
    }, 
  ];

  const [number, setNumber] = useState(() => data.length);
  console.log(number);

  const numLowHandler = () => {
    if (number > data.length) {
      setNumber(1);
    } else if (number <= 1) {
      setNumber(data.length);
    } else {
      setNumber((prevState) => prevState - 1);
    }
  };

  const numPlusHandler = () => {
    if (number > data.length - 1) {
      setNumber(1);
    } else if (number <= 0) {
      setNumber(data.length - 1);
    } else {
      setNumber((prevState) => prevState + 1);
    }
  };

  return (
    <div className={styles.containr}>
      <ContainerDiv>
        {data.map((item, index) => (
          <SliderItem
            key={index}
            name={item.name}
            number={number}
            dataLenght={data.length}
            text={item.text}
          />
        ))}
        <ShowItem>
          <h1>{data[0].name}</h1>
          <p>{data[0].text}</p>
        </ShowItem>
      </ContainerDiv>

      <div className={styles.buttonContainer}>
        <button onClick={numLowHandler}>
          <TiArrowLeftThick />
        </button>
        <button onClick={numPlusHandler}>
          <TiArrowRightThick />
        </button>
      </div>
    </div>
  );
};

export default Slider;
