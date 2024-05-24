import React from "react";
import { Outlet } from "react-router-dom";

function Inicio() {
    return (
        <>
            <link rel="stylesheet" href="src\assets\css\index.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

            <div className="BoxMain">
              
                <div className="Info pacifico-regular">
                    <h1 className="Title">Parroquia San Juan Pablo ll</h1>
                    <h3>La Iglesia os mira con confianza, y espera que seáis el pueblo de las bienaventuranzas</h3>
                </div>
                <div className="Logos">
                    <img src="./public/patrono.png" alt=""  className="Imagen" />
                    <img src="./public/cruz.png" alt="" className="Cruz"/> 
                </div>
            </div>
        </>
    )
}
export default Inicio;