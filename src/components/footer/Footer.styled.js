import styled from "styled-components";

export const Footer_Wrap = styled.div`
  width: 1440px;
  height: 100px;
  background-color: #f72d57;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-right: 3rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer_Title = styled.div`
  color: #ffffff;
  font-family: "Praise", cursive;
  width: 30%;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
`;
export const Footer_Links = styled.div`
  width: 50%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const Privacy_Link = styled.div`
  padding-right: 1rem;
`;
export const AboutUs_Link = styled.div`
  padding-right: 1rem;
`;
export const ContactUs_Link = styled.div`
  padding-right: 1rem;
`;
