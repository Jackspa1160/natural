import React from "react";
import styled from "styled-components";
function Hero() {
  return (
    <Container>
      <Description>
        <TagLine>Best Baler for best farmers</TagLine>
        <HeadLine>To Those That Work In Acres, Not In Hours</HeadLine>
        <ScrollButton>
          scroll down <img src="photos/down-arrow.png" alt="" />{" "}
        </ScrollButton>
      </Description>
      <Image>
        <img src="./photos/heroImage.png" alt="" />
      </Image>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 15px;
  @media only screen and (max-width: 900px) {
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`;
const Image = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    width: 70%;
    margin-top: 20px;

    img {
      width: 80%;
    }
  }
`;
const TagLine = styled.p`
  width: 321px;
  height: 30px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */

  text-transform: uppercase;
  margin-bottom: 20px;
  color: #df6951;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;

    width: 80%;
    text-align: center;
  }
`;
const HeadLine = styled.h3`
  width: 100%;

  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 85px;
  /* or 106% */

  letter-spacing: -0.04em;

  color: #ffffff;

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    font-size: 45px;
    line-height: 65px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 55px;
    width: 80%;
    text-align: center;
    margin-top: 20px;
  }
`;
const ScrollButton = styled.button`
  img {
    width: 8%;
    margin-bottom: -5px;
  }
  margin-top: 70px;
  color: antiquewhite;
  font-family: Poppins;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.04em;
  text-align: left;
  width: 300px;
  background-color: transparent;
  border: none;
  outline: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export default Hero;
