import React from "react";
import styled from "styled-components";
function Testimonials() {
  return (
    <Container>
      <Tag>
        <h1>
          What People Say <span>About Us</span>
        </h1>
      </Tag>
      <TestiBox>
        <ProfilePic></ProfilePic>
        <Review></Review>
      </TestiBox>
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
`;
const Tag = styled.div`
  h1 {
    width: 500px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 60px;
    /* or 115% */

    text-align: center;

    color: #ffffff;
  }
  span {
    color: #e5cf00;
  }
`;
const TestiBox = styled.div`
  display: grid;
  grid-row: 2;
  border: 1px solid yellow;
`;
const ProfilePic = styled.div`
  border: 1px solid red;
  width: 50px;
  height: 50px;
`;
const Review = styled.div`
  border: 1px solid blue;
`;
export default Testimonials;
