import React from "react";
import SearchBar from './SearchBar';
import styleNav from "./Nav.module.css";
import { NavLink } from "react-router-dom";



export default function Nav({onSearch}) {
    
    return (
        <div className={styleNav.container}>
            <ul className={styleNav.menu}>
                <li >
                    <NavLink to="/">
                        <img className={styleNav.homeimg} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo-rick-and-motry" />
                    </NavLink>
                </li>
                <li /*className={styleNav.searchbar}*/>
                    <SearchBar onSearch={onSearch}/>
                </li>
                <li>
                    <NavLink to="/about">
                        <span className={styleNav.about}>About</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}