import { css } from "styled-components";

export const DashboardMain = css`

    width: 100%;
    background-color: #f0f8ff;
    height: 100%;

    header {

        background-color: #3d7c47;
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

        text-align: center;
    }

    .about-div {

        width: 95%;
        max-width: 80%;
        background: rgba(242, 212, 92, .7);
        margin: 0 auto;
        padding: 3%;
        margin-top 3%;
        border: 20px dashed sienna;
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