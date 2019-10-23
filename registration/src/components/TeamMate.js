import React from "react";
import styled from "styled-components";
import Aaron from "./Images/aaron.jpg"


const MainTeamMate = styled.div`

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: #3d7c47;
    filter: brightness(130%);
    width: 80%;
    margin: 0 auto 5% auto;
    padding: 3% 0;
    

img {

    max-width: 33%;
    filter: brightness(75%);
}

.text-div {

    margin: 6% auto;
    max-width: 80%;
    display: flex
    flex-flow: column;
    align-items: center;
    border: 4px solid black;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: white;
    filter: brightness(75%);

    p {

        margin: 2% 0;
        
    }

    p:first-child {

        text-decoration: underline;
        font-size: 110%;
        
    }

    p:nth-child(3) {

        text-align: left;
        background: #3d7c47;
        
        padding: 5% 3%;
        color: white;
        margin-bottom: 0;
        border-top: 4px solid black;
        
    }
}
`;

function TeamMate (props) {

    let image;
    
    if(props.member.img === "Aaron") {
        image = Aaron;
    }
    else if (props.member.img === "Cory"){
        
    }
    else if (props.member.img === "Joseph"){

    }
    else if (props.member.img === "Anika"){

    }
    else if (props.member.img === "Gwen"){

    }
    else if (props.member.img === "Novshiel"){

    }
    else {

    }

    return(
        <MainTeamMate>
            <img src={image}></img>
            <div className="text-div">
                <p>{props.member.name}</p>
                <p><b>{props.member.role}</b></p>
                <p>{props.member.description}</p>
            </div>
        </MainTeamMate>
    );
}

export default TeamMate;