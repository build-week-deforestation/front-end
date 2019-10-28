import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { UserPageStyles } from "../Styles/UserPage";
import Iframe from "react-iframe";
import { COUNTRIES } from "./Countries";

const UserCard = styled.div`
  ${UserPageStyles}
`;

function UserPage(props) {
  const [userObj, setUserObj] = useState({
    firstName: "Aaron",
    lastName: "Merrifield-Lucier",
    region: "Algol",
    year: 2008
  });
  const [regionArry, setRegionArray] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchUserData = () => {
      Axios.get("bleh")
        .then(response => {
          console.log(response);
          setUserObj(response);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchUserData();
  }, []);
  


  function handleChange(e) {
    setInput(e.target.value);
    //setDisplayState("block");

    let filterArr = COUNTRIES;

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
    <UserCard>
      <header>
        <h1>{`Welcome Back ${userObj.firstName}!`}</h1>
      </header>
      <div className="profile-info">
        <h2>Profile Information</h2>
        <p>
          <b>{`Full Name:`}</b> {`${userObj.firstName} ${userObj.lastName}`}
        </p>
        <p>
          <b>{`Date and Locale of Interest:`}</b>{" "}
          {`${userObj.region}--YR${userObj.year}`}
        </p>
      </div>
      <div className="update">
        <h2>Update Personal Map</h2>
        <form>
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
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="cloropleth-div">
        <h2>Personal Cloropleth</h2>
        <div className="cloropleth-div">
          <h2>Deforestation Map</h2>
          <Iframe
            url="//plot.ly/~NaceyA/1.embed"
            width="80%"
            height="40%"
            id="cloropleth"
            className="map"
            display="initial"
            position="relative"
          />
        </div>
        <Link to="dashboard">To data dashboard</Link>
      </div>
    </UserCard>
  );
}

export default UserPage;
