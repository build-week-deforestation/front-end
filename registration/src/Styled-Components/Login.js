import { css } from "styled-components";


export const LoginStyles = css`

input {
    box-sizing: border-box;
    max-width: 70%;
    padding: 8px 10px 8px;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    border-bottom: 1px solid #DDD;
    margin-bottom: 2%;
    border: 1px solid #ccc;
    font-size: 120%;
    outline: none;
    cursor: text;
    align-self: center;

}

form {
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
    background: #f0f8ff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 5% 0;
    
    
    
    h2 {

        font-size 75%;
        margin: 0 0 2% 0;
        align-self: center;

    }

    button {

        margin-top: 5%;
        background-color: #3d7c47;
        border: none;
        padding: 6% 9%;
        color: #f0f8ff;
        border-radius: 2px;
        display: block;
        align-self: center;

        &:hover {
          
            background-color: #f0f8ff;
            color: #3d7c47;
        }
    }
}`