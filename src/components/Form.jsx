// import React from "react";
import {useState} from "react";
import { validation } from "./validation";

export default function Form(props) {
    const [userData, setUserData] = useState() ({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState() ({
        username: "",
        password: ""
    })

    function handleInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        setUserData(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                    id="username"
                    name="username"
                    placerholder="Enter a username"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p>{errors.username}</p>
                <label htmlFor="password">Password: </label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p>{errors.password}</p>
                <input type="submit" />
            </form>
        </div>
    )
}