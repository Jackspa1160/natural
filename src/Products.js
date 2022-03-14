import React from "react";
import styled from "styled-components";
function Products() {
  return (
    <Container>
      <TitleTag>
        <h1>
          We are Very <span>Professional</span> in our Work
        </h1>
      </TitleTag>
      <Main>
        <HeadLine>
          <p>Our Products</p>
        </HeadLine>
        <Body>
          <Image>
            <img src="./photos/balerpng.png" alt="" />
          </Image>
          <Description>
            <Info>
              <h5>Machine Specification</h5>
              <div>
                <p>Dimension : 1200 mm * 1300mm</p>
                <p>Kerb Weight :1500 kg</p>
                <p>Capacity of Hopper : 200 kg</p>
                <p>Operation System : Hydraulic</p>
                <p>
                  Power Source : 3-Phase Electricity or Diesel Generator Set
                </p>
                <p>Machine Output : 40 bales per hour</p>
                <p>Machine Output : 20-25 MT per day</p>
              </div>
            </Info>
            <Info>
              <h5>Bale Specification</h5>
              <div>
                <p>Bale Weight : 60 – 80 kg</p>
                <p>Compaction Density : 650 kg/m³</p>
                <p>Bale Width : 500 mm</p>
                <p>Bale Height : 500 mm</p>
              </div>
            </Info>
          </Description>
        </Body>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
  margin-top: 60px;

  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const TitleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    width: 560px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 60px;
    /* or 115% */

    text-align: center;

    color: #ffffff;

    span {
      color: #e5cf00;
    }

    @media only screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 45px;
      width: 350px;
    }
  }
`;

const Main = styled.div`
  width: 80%;
  padding: 15px;
  height: 100%;
  margin-top: 50px;
`;
const HeadLine = styled.div`
  width: 200px;
  height: 50px;

  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 166px;
    height: 36px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 36px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;

    mix-blend-mode: hard-light;
  }
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 100px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.div`
  width: 35%;

  img {
    width: 100%;
  }

  background: url(baler1.svg);

  box-sizing: border-box;
  border-radius: 50px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Description = styled.div`
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 70px;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;

    text-decoration-line: underline;

    color: #e5cf00;
  }

  div {
    width: 100%;
    margin-top: 20px;
    margin-left: 10px;
    color: #fff;
    p {
      margin-bottom: 10px;
    }
  }
`;
export default Products;
