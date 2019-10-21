import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";


// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47, 
//   Accent 3: #2c82c9

const FormDiv = styled.div`
    display: flex;
    border: none;
    overflow: visible;


    form {
        display: flex;
        flex-direction: column;  
        align-items: flex-start;

        
        button {

            margin-top: 5%;
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
    }
`;

const FormRows = styled.fieldset`
    display: flex;
    align-self: flex-start;
    min-width: 80%;
    padding: 1.5%;
    border: none;

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

    ul {

        
        background-color: white;
        margin-top -.3%;
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
    
    

`;


function handleSubmit (e) {

}



function RegistrationForm (props) {



    const [regionArry, setRegionArray] = useState(false)
    const [input, setInput] = useState("");
    
    useEffect(() => {

        const fetchRegionNames = () => {
            Axios.get("bleh").then(response => {
                setRegionArray(response);
            })
            .catch(error => {
                console.log(error);
            })

        }

        fetchRegionNames();
    }, []);


   

    function handleChange (e) {

        setInput(e.target.value);
        //setDisplayState("block");

        let filterArr = props.arr.filter(place => {
            return place.includes(e.target.value);
          }); 
      
          if(e.target.value === ""){
              setRegionArray(false);
          }
          else {
              setRegionArray(filterArr);
          }
    }


    
    return(
        
        <FormDiv>
            <form onSubmit={event => handleSubmit()}>

                <FormRows>
                    
                        <input id ="username" 
                        type="text" 
                        name="username"
                        placeholder="username"
                        /> 
                    
                        <input id ="password"  
                        type="password" 
                        name="password"
                        placeholder="password"
                        /> 
                </FormRows>
                <FormRows>
                    
                        <input id ="First-Name"  
                        type="text" 
                        name="First-Name"
                        placeholder="First Name"
                        />
                    
                        <input id ="Last-Name"  
                        type="text" 
                        name="Last-Name"
                        placeholder="Last Name"
                        />
                </FormRows>
                <FormRows>
                    <label htmlFor="Date-of-Interest">Date of Interest: <p>Choose a year between 1990 and 2005</p></label>
                    <input id ="Date-of-Interest"  
                        type="text" 
                        name="Date-of-Interest"
                        
                        />
                    <label htmlFor="Region-Of-Interest">Region of Interest:</label>
                        <input id ="Region-Of-Interest"  
                        type="text" 
                        name="Region-Of-Interest"
                        autocomplete="off"
                        value={input}
                        onClick={event => event.preventDefault()}
                        onChange={event => handleChange(event)}
                        />
                        <ul>
                        {regionArry.length > 0 && regionArry.map(place => (
                        <li key={place}>
                            <a 
                            
                            onClick={e =>
                             
                             {
                             console.log({place}.place);
                              setInput({place}.place);
                              setRegionArray(false);

                            }}>{place}</a></li>
                        ))}
                        </ul>
                </FormRows>
                <button type="submit">Register</button>
            </form>
        </FormDiv>           
        

    );
}


export default RegistrationForm; 