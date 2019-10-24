import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { UserPageStyles } from '../Styles/UserPage';

const UserCard = styled.div`${UserPageStyles}`;

 
function UserPage (props) {

    const [userObj, setUserObj] = useState({firstName: "Aaron",
                                            lastName: "Merrifield-Lucier",
                                            region: "Algol",                                        
                                            year: 2008});
    const [regionArry, setRegionArray] = useState(false);
    const [input, setInput] = useState("");

    const tempArr = ["albania",
    "romania", "lithuania", "United States", "A", "a", "a", "A"];

    useEffect(() => {
        const fetchUserData = () =>
        {
            Axios.get("bleh").then(
                response =>{
                    console.log(response);
                    setUserObj(response);

                }
            )
            .catch(error => {
                    console.log(error);
            })
        }

        fetchUserData();
    }, []);

    function handleChange (e) {

      
        setInput(e.target.value);
        //setDisplayState("block");
        let filterArr = [];
        let tracker = e.target.value.length - 1;
        
        console.log(tracker);

        filterArr = tempArr.filter(place => {
            return place.charAt(tracker).toLowerCase().includes(e.target.value.charAt(tracker).toLowerCase());
        });

        filterArr = filterArr.filter(place => {
            return place.charAt(0).toLowerCase().includes(e.target.value.charAt(0).toLowerCase());
        });

       
            if(e.target.value === ""){
                setRegionArray(false);
            }
            else {
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
                <p><b>{`Full Name:`}</b> {`${userObj.firstName} ${userObj.lastName}`}</p>
                <p><b>{`Date and Locale of Interest:`}</b> {`${userObj.region}--YR${userObj.year}`}</p>
            </div>
            <div className="update">
                <h2>Update Personal Map</h2>
                <form>
                    <label htmlFor="Date-of-Interest">Date of Interest: <p>Choose a year between 1990 and 2005</p></label>
                        <input id ="Date-of-Interest"  
                            type="text" 
                            name="Date-of-Interest"
                            
                            />
                    <label htmlFor="Region-Of-Interest">Region of Interest:</label>
                        <input id ="Region-Of-Interest"  
                            className="region"
                            type="text" 
                            name="Region-Of-Interest"
                            autocomplete="off"
                            value={input}
                            onClick={event => event.preventDefault()}
                            onChange={event => handleChange(event)}
                            />
                            <div className="list-div">
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
                            </div>
                     <button type="submit">Update</button>
                </form>
            </div>
            <div className="cloropleth-div">
                <h2>Personal Cloropleth</h2>
                <img src="data:image/jpeg;base64,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" />
                <Link to="dashboard">To data dashboard</Link>
            </div> 
        </UserCard>
    );
}

export default UserPage; 