import React, { useState, useEffect } from 'react';
import Login from './Login';
// import Test from '../test';
import Search from './Search';
import Header from '../static/Header';




const Landing = () => {
    // const [viewState, setViewState] = useState("login");
    const [authState, setAuthState] = useState(false);
    // // const [userState, setUserState] = userState({});

    useEffect(() => {
        getUser();
        // postUser();   
    }, []);



    const getUser = () => {
        fetch("http://localhost:8080/users/login", {
            method: "GET",
            credentials: "include",
        })
        .then(response => response.json())
        .then((json) => {
            // setUserState(json)
            setAuthState(json.hasOwnProperty("id"))
        });
    }

    console.log(authState);

    




    return(
        <div>
            {authState ? <Header /> : <div></div>}
            {authState ? <Search />  : <Login />}
        </div>
    )

}

export default Landing;