import React from 'react';
import styled from "styled-components";


const HackathonBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoxLeft = styled.div` //contiendra titre en haut, date en bas à gauche, lieu bas gauche
    display: flex;

`;
const Boxright = styled.div` //contiendra description du hackathon
     display: flex;
     
 `;
//
// const BottomLeft = styled.div` //contiendra date
//     display: flex;
// `
//
// const Bottomright = styled.div` //contiendra lieu
//     display: flex;
// `
//
const HackTitle = styled.span`
  
 `

export const Hackathon = () => {
    return <HackathonBox>
            <BoxLeft>
                <HackTitle>Retake control of all your deliveries<HackTitle/>
            <BoxLeft/>
            <Boxright>To help you focus on the heart of your activity:
                your business. We connect you to the largest urban customer base.
                <Boxright/>

        <HackathonBox/>
}

Hackathon.propTypes = {

                
}
