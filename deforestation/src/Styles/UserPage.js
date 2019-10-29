import { css } from "styled-components";

export const UserPageStyles = css`

    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    background-color: #22313f;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    

    h2 {
        color: #f0f8ff;
        font-size: 1.5rem;
        letter-spacing: 1.2px;
        font-weight: 300;
        text-align: center;
    }

    header {
        color: #22313f;
        font-weight: 300;
        background-image: linear-gradient(-45deg, #03bd37, #305063);
        display: flex;
        justify-content: space-around;
        align-items; center;

        h1 {
            color: #f0f8ff;
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
        }
    }

    .profile-info {

        
       

        p {

            text-align: center;
            font-size: 75%;
            margin: 0 auto;
            margin-bottom: 2%;
            color: #2c82c9;
        }
    }

    .update {

        p {
        
            font-size: 75%;
            color: #2c82c9;
        }

        label {

            font-size: 75%;
            color: #2c82c9;
            margin-bottom: 2%;
        }

        input {

            max-width: 60%;
            margin-bottom: 3%;
            box-sizing: border-box;
            min-width: 150px;
            padding: 8px 10px 8px;
            border: none;
            border-radius: 4px;
            box-shadow: none;
            border-bottom: 1px solid #DDD;
            border: 1px solid #ccc;
            font-size: 120%;
            outline: none;
            cursor: text;
        }

        
        button {

            margin-bottom: 2%;
            background-color: #3d7c47;
            border: none;
            padding: 6% 9%;
            color: #f0f8ff;
            border-radius: 2px;
            display: block;

            &:hover {
            
                background-color: #f0f8ff;
                color: #3d7c47;
            }
        }

        form {

            display: flex;
            flex-flow: column;
            align-items: center;

            ul {

        
                background-color: white;
                margin-top -3.2%;
                max-width: 59%;
                min-width: 59%;
                padding: 0;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                
        
                li {
        
                    border: 1px solid lightgrey;
                    text-align: center;
                    list-style-type: none;
                    max-width: 100%;
                    color: black;
                    padding: 5% 0 5% 4%;
                    font-size: 50%;
        
                }
            }
        }
    }

    .cloropleth-div {

        display: flex;
        flex-flow: column;
        align-items: center;

        h2 {

            margin-top: 0;
        }
        
        img {

            max-width: 70%;
            margin-bottom: 2%;
        }

        a {

            text-decoration: none;
            margin-bottom: 3%;
        }
    }
    
    
    @media (min-width: 768px) {

       .update{
            
            button {
            
                padding: 1.5% 2.25%;
            }
        }
    }
    `
