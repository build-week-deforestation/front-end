import { css } from "styled-components";


export const RegistrationStylesMain = css`

    width: 100%;
    margin: 0 auto; 
    

    header {

        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction row;
        background-color: #3d7c47;
        padding: 1.5%;
        padding-bottom: 15%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    
    @media (min-width: 768px) {

            .main-content-div {
                
                display: flex;

                .breakpoint-div {

                    min-width: 60%;
                }
            }
    }

}`

export const RegistrationStylesCard =`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f0f8ff;
    color: #22313f
    padding: 1.5%;
    margin-top: 5%;
    border-radius: 6px;
    margin-bottom: 5%;
    animation: fadein 2.2s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    animation: fade 1.5s;

    h2 {

        font-weight: 300;
        font-size: 1.6em;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #22313f;
    }

    @media (min-width: 768px) {

        max-width: 40%;
    }
    
    @media (max-width: 375px) {

        height: 95%;
    }
    
  
    
    `

    