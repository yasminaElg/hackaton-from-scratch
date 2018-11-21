import React from "react";
import styled from "styled-components";
import { fonts } from "../fonts";
import PropTypes from "prop-types";

const HackathonBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
const Empty = styled.div`
  flex: 1;
`;
const BoxLeft = styled.div`
  //contiendra titre en haut, date en bas à gauche, lieu bas gauche
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;
const Description = styled.div`
  //contiendra description du hackathon
  display: flex;
  flex: 1;
  font-family: ${fonts.catamaran};
  font-weight: lighter;
`;

const Bold = styled.span`
  font-weight: normal;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Date = styled.div`
  //contiendra date
  display: flex;
  justify-content: flex-start;
  //     align-content: flex-start;
  flex: 2;
`;

const Address = styled.div`
  //contiendra lieu
  display: flex;
  justify-content: flex-start;
  //     align-content: flex-end;
  flex: 2;
`;

const Title = styled.span`
  display: flex;
  align-content: flex-start;
  font-family: ${fonts.catamaran};
  font-weight: 800;
  font-size: larger;
`;

export const Hackathon = ({ title, date, address, description }) => {
  return (
    <HackathonBox>
      <Empty />
      <BoxLeft>
        <Title>{title}</Title>
        <Bottom>
          <Date>{date}</Date>
          <Address>{address}</Address>
        </Bottom>
      </BoxLeft>
      <Description>{description}</Description>
      <Empty />
    </HackathonBox>
  );
};

Hackathon.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
