import React, { useState } from "react";
import styled from "styled-components";
import { DashboardMain as DStyle } from "../Styles/Dashboard";
import TeamMate from "./TeamMate";
import { Link } from "react-router-dom";
import { TEAM } from "./Team";
import Iframe from "react-iframe";


const DashboardMain = styled.div`${DStyle};`;

function Dashboard () {
                                    

    return (
        <DashboardMain>

            <header>
                <Link to="/user-page">Your Profile</Link>
                <Link to="/">Sign Out</Link>
            </header>
            <div className="cloropleth-div">
                <h2>Deforestation Map</h2>
                <Iframe url="//plot.ly/~NaceyA/1.embed"
                width="85%"
                height="90%"
                style="background: #FFFFFF;"
                id="cloropleth"
                className="map"
                display="initial"
                position="relative" />
            </div>
            <div className="about-div">
                <h2>About Us</h2>
                {TEAM.map(teammate => (
                    <TeamMate member={teammate}/>
                ))}
            </div>
        </DashboardMain>
    );
}

export default Dashboard;