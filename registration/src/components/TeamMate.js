import React from "react";
import styled from "styled-components";
import Aaron from "./Images/aaron.jpg"

const MainTeamMate = styled.div`

img {

    max-width: 70%;
}
`;

function TeamMate (props) {

    

    return(
        <MainTeamMate>
            <img src={Aaron}></img>
            <div>
                <p>{props.member.name}</p>
                <p>{props.member.role}</p>
                <p>{props.member.description}</p>
            </div>
        </MainTeamMate>
    );
}

export default TeamMate;