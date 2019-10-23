import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";
import Login from "./Login";

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

padding-bottom: 15%;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const LogoImage = styled.img`
    background-image: url(/Images/logo.svg);

`;

const RegistrationContainer = styled.div `
    width: 100%;
    margin: 0 auto; 
    width: 100%;
    
`;

const RegistrationCard = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f0f8ff;
    color: #2c82c9;
    padding: 1.5%;
    
    margin-bottom: 5%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media (max-width: 375px) {

        height: 95%;
    }
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
            
            

        </RegistrationContainer>           
        

    );
}


export default Registration; 