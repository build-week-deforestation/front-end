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

    @media min-width(768px) {

        .cloropleth-div {
            
            min-height: 80vh;
        }
    }
`