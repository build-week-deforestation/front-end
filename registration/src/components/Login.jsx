import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoginStyles } from "../Styled-Components/Login";


const MainLogin = styled.div`${LoginStyles}`;

function Login () {

    

    const handleSubmit = () => {


    }

    

    return(

        
            <MainLogin>

                <form onSubmit={event => handleSubmit()}>
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
                    <button type="submit">Login</button>
                </form>
            </MainLogin>
        
    );
}

export default Login;