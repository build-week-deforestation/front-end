import { css } from "styled-components";

export const TeamMateStyles = css`

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: #3d7c47;
    filter: brightness(130%);
    width: 80%;
    margin: 0 auto 5% auto;
    padding: 3% 0;
    display: flex;
    flex-flow: column; 
    align-items: center;

    img {

    max-width: 33%;
    filter: brightness(75%);
    
    }

    .text-div {

        margin: 6% auto;
        max-width: 80%;
        display: flex
        flex-flow: column;
        align-items: center;
        border: 4px solid black;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background: white;
        filter: brightness(75%);

        p {

            margin: 2% 0;
            
        }

        p:first-child {

            text-decoration: underline;
            font-size: 110%;
            
        }

        p:nth-child(3) {

            text-align: left;
            background: #3d7c47;
            
            padding: 5% 3%;
            color: white;
            margin-bottom: 0;
            border-top: 4px solid black;
            
        }
    }`