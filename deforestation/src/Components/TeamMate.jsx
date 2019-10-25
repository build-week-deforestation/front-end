import React from "react";
import styled from "styled-components";
import { TeamMateStyles } from "../Styles/TeamMate"
import Aaron from "./Images/aaron.jpg"


const MainTeamMate = styled.div`${TeamMateStyles}`;

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