import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Login from "./Login";
import {
  FormDivStyles,
  FormRowStyles,
  LinkTextStyles
} from "../Styles/RegistrationForm";

// //body color: #e8ecf1,
//  Primary color:  #03bd37,
//   Accent 1: #f0f8ff,
//   Accent 2: #3d7c47,
//   Accent 3: #2c82c9

const FormDiv = styled.div`
  ${FormDivStyles};
`;
const FormRows = styled.fieldset`
  ${FormRowStyles}
`;
const LinkText = styled.p`
  ${LinkTextStyles}
`;

function RegistrationForm(props) {
  //Axios Post request.
  function handleSubmit(e) {
    axios.post(`https://blahahahahahahaha/users`, { newUser }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  //set name and password of newUser
  const [newUser, setValues] = useState({
    username: "",
    password: "",
    region: "",
    year: ""
  });

  const [modal, setModal] = useState(false);
  const [regionArry, setRegionArray] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchRegionNames = () => {
      axios
        .get("bleh")
        .then(response => {
          setRegionArray(response);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchRegionNames();
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  function handleChange(e) {
    setInput(e.target.value);
    //setDisplayState("block");

    let filterArr = props.countries;

    for (let i = 0; i < e.target.value.length; i++) {
      filterArr = filterArr.filter(place => {
        return place
          .charAt(i)
          .toLowerCase()
          .includes(e.target.value.charAt(i).toLowerCase());
      });
    }

    if (e.target.value === "") {
      setRegionArray(false);
    } else {
      setRegionArray(filterArr);
    }
  }

  return (
    <section>
      <div class="modal">
        <Modal isOpen={modal}>
          <ModalHeader toggle={toggle}>Enter Login Info</ModalHeader>

          <ModalBody>
            <Login />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
      <FormDiv>
        <form onSubmit={event => handleSubmit()}>
          <FormRows>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
            />

            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </FormRows>
          <FormRows>
            <input
              id="First-Name"
              type="text"
              name="First-Name"
              placeholder="First Name"
            />

            <input
              id="Last-Name"
              type="text"
              name="Last-Name"
              placeholder="Last Name"
            />
          </FormRows>
          <FormRows>
            <label htmlFor="Date-of-Interest">
              Date of Interest: <p>Choose a year between 1990 and 2005</p>
            </label>
            <input id="Date-of-Interest" type="text" name="Date-of-Interest" />
            <label htmlFor="Region-Of-Interest">Region of Interest:</label>
            <input
              id="Region-Of-Interest"
              type="text"
              name="Region-Of-Interest"
              autocomplete="off"
              value={input}
              onClick={event => event.preventDefault()}
              onChange={event => handleChange(event)}
            />
            <div className="list-div">
              <ul>
                {regionArry.length > 0 &&
                  regionArry.map(place => (
                    <li key={place}>
                      <a
                        onClick={e => {
                          console.log({ place }.place);
                          setInput({ place }.place);
                          setRegionArray(false);
                        }}
                      >
                        {place}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </FormRows>

          <div className="button-link-div">
            <button type="submit">Register</button>
            <div className="link-div">
              <LinkText onClick={() => toggle()}>
                Already A User? Click Here.
              </LinkText>

              <Link to="/dashboard">
                <LinkText>Continue to Data Set</LinkText>
              </Link>
            </div>
          </div>
        </form>
      </FormDiv>
    </section>
  );
}
export default RegistrationForm;
