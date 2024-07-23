import React, { useContext, useEffect } from "react";
import { Calendario } from "../components/Calendario";
import Cookies from "js-cookie";
import axios from "axios";
import { UserContext } from "../components/contex/UserContextProvider";
export const Agenda = () => {
    const {user} = useContext(UserContext)
    useEffect(()=>{
       
        console.log(user,"usuarios")
    },[])
    
    return (
        <>
            {/* <Calendario/> */
            }
            <div>
                <h1>Usuario{user.nombre}</h1>
            </div>
        </>
    );
};
