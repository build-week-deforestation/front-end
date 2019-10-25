import { css } from "styled-components";

export const UserPageStyles = css`

    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    background: #f0f8ff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    h2 {

        text-align: center;
    }

    header {

        background-color: #3d7c47;
        width: 100%;

        h1 {

            font-size: 115%;
            color: white;
        }
    }

    .profile-info {

        
       

        p {

            text-align: left;
            font-size: 75%;
            margin-left: 7%;
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
                margin-top -3%;
                min-width: 143px;
                padding: 0;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                
        
                li {
        
                    border: 1px solid lightgrey;
                    list-style-type: none;
                    min-width: 100%;
                    text-align: left;
                    color: black;
                    padding: 1% 0 1% 4%;
        
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
    }`