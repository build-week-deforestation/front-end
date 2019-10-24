import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RegistrationStylesMain, RegistrationStylesCard } from "../Styles/Registration";

import RegistrationForm from "./RegistrationForm";
import Login from "./Login";

// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47, 
//   Accent 3: #2c82c9


const RegistrationContainer = styled.div `${RegistrationStylesMain};`;

const RegistrationCard = styled.section`${RegistrationStylesCard};`;


function Registration (props) {

  
    return(
        
        <RegistrationContainer className="RegCont">

            <header>
            
            </header>


            <div className="main-content-div">

                <div className="breakpoint-div">

                </div>
                <RegistrationCard>

                    <h2>Discover More</h2>
                
                    <RegistrationForm arr={["albania", "romania", "a", "a", "lithuania", "a", "a", "United States"]}/>
                
                </RegistrationCard>
            </div>
            
        </RegistrationContainer>           
    );
}


export default Registration; 