import { css } from "styled-components";

export const DashboardMain = css`

    width: 100%;
    background-color: #22313f;
    height: 100%;
    

    header {
        color: #22313f;
        font-weight: 300;
        background-image: linear-gradient(-45deg, #03bd37, #305063);
        padding-bottom: 2%;
        display: flex;
        justify-content: space-around;
        align-items; center;

        a {

           margin-top: 2%;
           text-decoration: none;
           color: white;
           padding: 1.5% 3%;
           white-space: nowrap;
        }

        
    }

    .cloropleth-div {

        display: flex;
        flex-flow: column;
        align-items: center;
        height: 45vh;

       
    }

    h2 {
        color: #f0f8ff;
        font-size: 2.8rem;
        font-weight: 300;
        text-align: center;
    }

    .about-div {

        width: 95%;
        max-width: 80%;
        margin: 0 auto;
        padding: 3%;
        margin-top 3%;
    }

    @media (min-width: 768px) {

        header {

            padding-bottom: 0;

            
            a {

                padding: 2% 3%;
                margin-top: 0;
            }
        }

        .cloropleth-div {
            
            min-height: 80vh;

        }
    }
`