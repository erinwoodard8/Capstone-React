import React, { useState, useEffect } from 'react';
import Login from './Login';
import Test from '../test';
import Header from '../static/Header';
import MyflixLogo4 from "../static/MyflixLogo4.png";



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

    const authView = () => {
        if(!authState == false) {
            return setViewState("test");
        }
    }

    console.log(authState);

     

    // const renderView = () => {

    //     if(authState) {
    //        setViewState("test");
    //     }

    //     switch(viewState) {
    //         case "login":
    //             return(<Login />)
    //         case "test":
    //             return <div></div>   
    //     }
    // }




    return(
        <div>
            <Header state={authState} />
            {authState ? <Test /> : <Login />}
        </div>
    )

}

export default Landing;