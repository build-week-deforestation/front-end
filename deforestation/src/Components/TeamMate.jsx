import React from "react";
import styled from "styled-components";
import { TeamMateStyles } from "../Styles/TeamMate"
import Aaron from "./Images/aaron.jpg";
import Cory from "./Images/cory.PNG";
import Joseph from "./Images/joseph.jpg";
import Gwen from "./Images/gwen.jpg";
import Anika from "./Images/anika.jpg";
import Novshiel from "./Images/novshiel.jpg";
import Barbaro from "./Images/barbaro.PNG";


const MainTeamMate = styled.div`${TeamMateStyles}`;

function TeamMate (props) {

    let image;
    
    if(props.member.img === "Aaron") {
        image = Aaron;
    }
    else if (props.member.img === "Cory"){
        image = Cory;
    }
    else if (props.member.img === "Joseph"){
        image = Joseph;
    }
    else if (props.member.img === "Anika"){
        image = Anika;
    }
    else if (props.member.img === "Gwen"){
        image = Gwen;
    }
    else if (props.member.img === "Novshiel"){
        image = Novshiel;
    }
    else {
        image = Barbaro;
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