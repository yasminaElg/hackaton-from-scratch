import React from 'react';
// import PropTypes from 'prop-types';
import styled from "styled-components";
import hands from "../image/imgHands.png";
import logo from "../image/logoShippr.png";
import {fonts} from "../fonts";
import {colors} from "../colors";


//const HeaderStyled = styled.header`
//     width: 600;
//      height: 300;
//      background: url('./image/imgHands.png') no-repeat;
//      background-size: 100%;
//  `;

const TitleBox  = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    flex:2;
`

const Title = styled.span`
    font-size: 5em;
    text-align: center;
    margin-bottom: 0;
    font-family: ${fonts.openSans};
 `

const SubTitle = styled.h1`
    font-size: 5em;
    text-align: center;
    margin-top: 0;
    font-family: ${fonts.catamaran};
    font-weight: 800;

 `



const Image = styled.div`
    background-image: url(${hands});
    background-repeat: no-repeat;
    background-size: 100%;
    flex:1;
`

const ContainerDiv  = styled.div`
    display: flex;
`
const TopImage  = styled.div`
    display: flex;
`

const Empty = styled.div`
    flex: 1;
`

const Logo = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex: 2;
`

const ButtonBox  = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex:1;
`
const Button = styled.button`
    margin-top: 75px;
    margin-right: 130px;
    height: 60px;
    width: 200px;
    background-color: rgba(0,0,0,0);
    border:3px solid ${colors.purple};
    color: ${colors.purple};
    font-family: ${fonts.catamaran} ;
    font-weight: 800;
    font-size: 14px;
`



export const Header = ()=> {

    return <ContainerDiv>
        <Image>
            <TopImage>
                <Empty/>
                <Logo>
                    <img src={logo} alt={"SHIPPR"} height="150" width="200"/>
                </Logo>
                <ButtonBox>
                    <Button>CREATE AN EVENT</Button>
                </ButtonBox>

            </TopImage>

            <TitleBox>
                <Title>Monthly</Title>
                <SubTitle>Hakathon.</SubTitle>
            </TitleBox>
        </Image>


    </ContainerDiv>
}

Header.propTypes = {
    
}