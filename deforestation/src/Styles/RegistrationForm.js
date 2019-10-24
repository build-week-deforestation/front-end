import { css } from "styled-components";

export const FormDivStyles = css`
    
    display: flex;
    border: none;
    overflow: visible;
    width: 100%;

    .modal-content {

        postion: absolute;
        top: 0;
        max-width: 80%;
    }

    form {
        display: flex;
        flex-direction: column;  
        align-items: flex-start;
        max-width: 100%;
        

        .button-link-div {

            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 1.5%;

            .link-div {
                
                display: flex;
                flex-flow: column;
                justify-content: space-around;

                a:first-child {
                   
                    p {

                    margin-top: 10%;
                    
                    margin-bottom: 10%;
                    }
                }

                a{

                    text-decoration: none;
                    
                }
            }
        }

        button {

            margin-top: 5%;
            background-color: #3d7c47;
            width: 50%;
            border: none;
            padding: 6% 9%;
            color: #f0f8ff;
            border-radius: 2px;
            display: block;
            margin-bottom: 2%;
            &:hover {
              
                background-color: #f0f8ff;
                color: #3d7c47;
            }
        }
    }`

    export const FormRowStyles = css`
        
        display: flex;
        align-self: flex-start;
        min-width: 80%;
        width: 100%;
        padding: 1.5%;
        border: none;
        flex-flow: column;

        label {
            margin-right: 100%;
            white-space: nowrap;
            font-size: 18px;
            margin-top: 2%;
            font-weight: 300;

            p {

                font-size: .75em;
            }
        }

        input {
            box-sizing: border-box;
            min-width: 150px;
            padding: 8px 10px 8px;
            border: none;
            border-radius: 4px;
            box-shadow: none;
            border-bottom: 1px solid #DDD;
            margin-top: 5.5%;
            border: 1px solid #ccc;
            font-size: 120%;
            outline: none;
            cursor: text;
            

        }

        select {

            box-sizing: border-box;
            border: none;
            border-radius: 4px;
            box-shadow: none;
            overflow-y: scroll;
            font-size: 120%;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            margin: 0 auto;
        
            

            option {
                
                border: 1px solid lightgrey;
                padding: 8px 10px 8px;
                min-width: 100%;        
            }
        }

        .list-div {

            position: relative;
            
        }

        ul {

            
            background-color: white;
            margin-top: -.3%;
            min-width: 90%;
            padding: 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            position: absolute;
            list-style-position: inside;
            overflow: scroll;
            max-height: 10vh;

            li {

                border: 1px solid lightgrey;
                list-style-type: none;
                max-width: 100%;
                text-align: left;
                color: black;
                padding: 1% 0 1% 4%;
                text-align: center;

                a {

                    min-width: 100%;
                    padding: 0 20%;
                    text-align: center;
                }

                &:hover {

                    color: white;
                    background: lightgrey;
                }

            }
        }`

export const LinkTextStyles = css`
   
    text-decoration: none;
    font-size: 50%;
    margin: 2%;`