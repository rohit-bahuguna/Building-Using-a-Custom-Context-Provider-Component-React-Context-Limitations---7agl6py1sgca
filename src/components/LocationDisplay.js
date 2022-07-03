import React from "react";
import { useLocation } from "react-router-dom";
import Navli from "./Navigation";

const LocationDisplay =()=>{
    const location = useLocation('');

    return(
        <>
             <Navigation/>
        </>
    )
}

export default LocationDisplay;
