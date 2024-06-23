import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header(ComponentPage) { 
    const User = useSelector((state)=>state.user)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const scrollToComponent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    console.log(ComponentPage.Inicio,"este componente llega")

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Actualiza isActive en base al scrollPosition
        setIsActive(scrollPosition >= 40);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]); // Dependencia de scrollPosition para actualizar el valor

    console.log(scrollPosition, "esto es scroll");
    console.log(User,"Usuario Nuevo")

    return (
        <>
            <link rel="stylesheet" href="src\assets\css\Header.css" />
                <nav className={isActive ? 'NavMainActivo' : 'NavMain'}>
                    <ul className="LogoMenu">
                        <img src="public/LogoParroquia.png" alt="Logo" className="logoParroquia" />
                    </ul>
                    <ul>
                        <li>Nombre:{User.Name}</li>
                        <li>Rol:{User.Rol}</li>
                    </ul>
                    <ul className="InfoMenu">
                        <li onClick={ComponentPage.Inicio}>
                            Inicio
                        </li>
                        <li onClick={ComponentPage.Sacramentos}>
                            Sacramentos
                        </li>
                        <li onClick={ComponentPage.Eucaristias}>
                            Eucaristias
                        </li>
                        <li onClick={ComponentPage.Grupos}>
                            Grupos
                        </li>

                       {/*  <Link to={'./Login'} style={{"textDecoration":"none"}}> */}
                            <a  className="ButtonA" style={{ '--clr': '#1e9bff' }}>
                                <span>
                                <Link to={'./Login'} style={{"textDecoration":"none"}}> 
                                 {isActive ? "Login" : "Logout"}
                                 </Link>
                                </span>
                                <i className="CuadroI"></i>
                            </a>
                        {/* </Link> */}
                    </ul>
                </nav>
        </>
    );
}

export default Header;
