import React from "react";
import { useState,useEffect, useRef } from "react";

function Eucaristias() {

    const [EucaristiaHoras, SetEucaristas]= useState({
        lunes:"19:00",
        Martes:"19:00",
        Miercoles:"19:00",
        Jueves:"19:00",
        Viernes:"19:00",
        Sabado:"19:00",
    })


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const dd = useRef(null)
    const hh = useRef(null)
    const mm = useRef(null)
    const ss = useRef(null)


    useEffect(() => {
        const endDate = new Date('2024-05-24T19:00:00');

        const updateCountdown = () => {
            const now = new Date();


            const distance = endDate.getTime() - now.getTime();

            

            /* switch (now.getUTCDay) {
                case "0":
                    console.log("Domingo");

                    break;
                case "1":
                    console.log("Lunes");
                case "2":
                    console.log("Martes");
                case "3":
                    console.log("miercoles");
                case "4":
                    console.log("Jueves");
                case "5":
                    console.log("Viernes");
                case "6":
                    console.log("Sabado");
                
                default:
                    break;
            } */

            if (distance < 0) {
                clearInterval(intervalId);
                return;
            }
            if (distance === 0 && now.getUTCDay()=="1") {
               
            }

            const days = Math.floor(distance  / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (dd.current) {
                dd.current.style.strokeDashoffset= 440 - (440*days)/365
            } 
            if(hh.current){
                hh.current.style.strokeDashoffset= 440 - (440*hours)/24
            }
            if(mm.current){
                mm.current.style.strokeDashoffset= 440 - (440*minutes)/60
            }
            if(hh.current){
                ss.current.style.strokeDashoffset= 440 - (440*seconds)/60
            }
            
        };

        const intervalId = setInterval(updateCountdown, 1000);


        return () => clearInterval(intervalId);
    }, []);
    return(
        <>
            <header>
                <link rel="stylesheet" href="src\assets\css\Eucaristias.css" />
            </header>
            <body>
            <div className="BoxTitleSacraments">
            <h4 className="titleSacraments">
                <span><i></i>E</span>
                <span><i></i>u</span>
                <span><i></i>c</span>
                <span><i></i>a</span>
                <span><i></i>r</span>
                <span><i></i>i</span>
                <span><i></i>s</span>
                <span><i></i>t</span>
                <span><i></i>i</span>
                <span><i></i>a</span>
                <span><i></i>s</span>
            </h4>
        </div>
        
            <div className="Eucaristias">
                <div id="time">
                   
                    {/* Dias  */}
                    <div className="circule" style={{ '--clr': '#1eb9ff' }}>
                        <svg>
                            <circle cx={"70"} cy={"70"} r={'70'} id="dd" ref={dd}></circle>
                        </svg>
                        <div id="days">{timeLeft.days} <br /> <span>Dias</span></div>
                    </div>
                    {/* Horas  */}
                    <div className="circule" style={{ '--clr': '#1eb9ff' }}>
                        <svg>
                            <circle cx={"70"} cy={"70"} r={'70'} id="hh" ref={hh}></circle>
                        </svg>
                        <div id="hours">{timeLeft.hours} <br /> <span>Horas</span></div>
                    </div>
                    {/* Minutos  */}
                    <div className="circule" style={{ '--clr': '#1eb9ff' }}>
                        <svg>
                            <circle cx={"70"} cy={"70"} r={'70'} id="mm" ref={mm}></circle>
                        </svg>
                        <div id="minutes">{timeLeft.minutes} <br /> <span>Minutos</span></div>
                    </div>
                    {/* Segundos  */}
                    <div className="circule" style={{ '--clr': '#2E8A99' }}>
                        <svg>
                            <circle cx={"70"} cy={"70"} r={'70'} id="ss" ref={ss}></circle>
                        </svg>
                        <div id="seconds">{timeLeft.seconds} <br /> <span>Segundos</span></div>
                    </div>

                </div>
                <div id="FechasInactivas">
                    <h3 className="titleSacraments TitleEucaristia">
                        <span><i></i>H</span>
                        <span><i></i>o</span>
                        <span><i></i>r</span>
                        <span><i></i>a</span>
                        <span><i></i>r</span>
                        <span><i></i>i</span>
                        <span><i></i>o</span>
                        <span><i></i>s</span>
                    </h3>
                  
                    <div className="infoEucaristia">
                    <h4>Lunes a Sabados</h4>
                    <h5>7 P:M Templo</h5>
                    <h4>Domingos</h4>
                    <h5>7:00 A:M Templo</h5>
                    <h5>10:00 A:M Templo</h5>
                    <h5>12:00 P:M Centro Comercial</h5>
                    <h5>5:30 P:M Templo</h5>
                    <h5>7:00 P:M Templo</h5>
                    <br />
                    <h4>Ultimo Viernes del Mes</h4>
                    <h5>Noche de Gloria 7:00 P:M Templo</h5>
                    <br />
                    <h4>Primer Sabado Mes</h4>
                    <h5>Misa de Aurora 5:00 A:M Templo</h5>

                    </div>

                   
                    <div className="imgTemplo">
                        <img src="public/iglesia.png" alt=""/>
                    </div>

                </div>
                 
            </div>
            
            
            </body>
        </>
    )
}
export default Eucaristias