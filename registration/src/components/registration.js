import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";


// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47, 
//   Accent 3: #2c82c9


const Header = styled.header`
display: flex;
justify-content: space-around;
align-items: flex-start;
flex-direction row;
background-color: #3d7c47;
padding: 1.5%;
height: 10%;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const LogoImage = styled.img`
    background-image: url(/Images/logo.svg);

`;

const RegistrationContainer = styled.div `
    width: 20em;
    height: 45em;
    margin-left: 3%;
    margin-right: 3%;
`;

const RegistrationCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f0f8ff;
    color: #2c82c9;
    padding: 1.5%;
    height: 85%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (max-width: 375px) {

        height: 95%;
    }
`;

const LinkText = styled.p`
    text-decoration: none;
    font-size: 50%;
    position: absolute; 
    top: 85%;
    right:  10%;
    margin: 2%;
`;

const RegistrationHeading = styled.h2`
    font-weight: 300;
    font-size: 1.6em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #000000;

`;




function Registration (props) {

    
    return(
        
        <RegistrationContainer>

            <Header>
            
            </Header>

            
            <RegistrationCard>

            <RegistrationHeading>Discover More</RegistrationHeading>
               
                <RegistrationForm arr={["albania", "romania", "lithuania", "United States"]}/>
            </RegistrationCard> 
            
            <Link to="/sign-up">
                <LinkText >Already A User? Click Here.</LinkText>
            </Link>
            <Link to="/main-page">
                <LinkText>Continue to Data Set</LinkText>
            </Link>
            
        </RegistrationContainer>           
        

    );
}


export default Registration; 