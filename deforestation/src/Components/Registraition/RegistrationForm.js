import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47,
//   Accent 3: #2c82c9

const FormDiv = styled.div`

display: flex;
flex-direction: column;
justify-content-space-between;


    form {

        display: flex;
        flex-flow: column;  
        align-items: center;
        justify-content-space-between;
        
        button {

            margin-top: 5%;
            max-width: 80%;
            background-color: #3d7c47;
            border: none;
            padding: 6% 9%;
            color: #f0f8ff;

            &:hover {
              
                background-color: #f0f8ff;
                color: #3d7c47;
            }
        }
    }
`;

const FormRows = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content-space-between;
    max-width: 100px;

    label {
        white-space: nowrap;
        font-size: 18px;
        letter-spacing: 1px;
        margin-top: 2%;
    }

    input {
        max-width: 150px;
        margin-top: 2%;
        border-radius: 4px;
        border: none;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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

function RegistrationForm(props) {
  //Axios Post request.
  function handleSubmit(e) {
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { newUser })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  //set name and password of newUser
  const [newUser, setValues] = useState({
    username: "",
    password: ""
    // region: "",
    // year: "",
  });

  const [regionArry, setRegionArray] = useState(false);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);

    let filterArr = props.arr.filter(place => {
      return place.includes(e.target.value);
    });

    if (e.target.value === "") {
      setRegionArray(false);
    } else {
      setRegionArray(filterArr);
    }
  }

  return (
    <FormDiv>
      <form onSubmit={event => handleSubmit()}>
        <FormRows>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={newUser.password}
          />
        </FormRows>
        <FormRows>
          <label htmlFor="First-Name">First Name:</label>
          <input id="First-Name" type="text" name="First-Name" />
          <label htmlFor="Last-Name">Last Name:</label>
          <input
            id="Last-Name"
            type="text"
            name="Last-Name"
            value={newUser.username}
          />
        </FormRows>
        <FormRows>
          <label htmlFor="Date">Date of Interest:</label>
          <input id="Date" type="date" name="Date" />
          <label htmlFor="Region-Of-Interest">Region of Interest:</label>
          <input
            id="Region-Of-Interest"
            type="text"
            name="Region-Of-Interest"
            value={input}
            onChange={event => handleChange(event)}
          />
          <ul>
            {regionArry.length > 0 &&
              regionArry.map(place => (
                <li key={place}>
                  <a
                    onClick={e => {
                      console.log({ place }.place);
                      setInput({ place }.place);
                    }}
                  >
                    {place}
                  </a>
                </li>
              ))}
          </ul>
        </FormRows>
        <button type="submit">Register</button>
      </form>
    </FormDiv>
  );
}

export default RegistrationForm;
