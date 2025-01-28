import { useHistory } from "react-router-dom"
import React from "react";

export default function Profile (){
    const {push} = useHistory();

    const profileHandler =()=>{
push('/product')
    
    }
        return (
            <button onClick={profileHandler}> ProductFile
            </button>
    
    
        )
    }