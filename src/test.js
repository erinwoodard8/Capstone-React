import React, { useEffect, useState } from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';


const Test = () => {

    const [userState, setUserState] = useState();

    // useEffect(() => {

    // }, [])

    const getUser = () => {
        fetch("http://localhost:8080/users/user", {
            method: "GET",
            credentials: "include",
        })
        .then(response => response.json())
        .then(json => setUserState(json));
        // .then(userState => console.log(userState));
    }

    const postUser = () => {
        let data = userState;
        fetch("http://localhost:8080/users/post/google", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(json => console.log(json));

    }

    console.log(userState);

    return(
        <div>
            <button onClick={getUser}>TEST</button>
            <button onClick={postUser}>POST</button>
        </div>
    )

};

export default Test;