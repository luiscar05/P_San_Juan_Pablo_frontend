import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(ComponentPage) {
   /*  const inicioRef = useRef(null);
    const sacramentosRef = useRef(null);
    const eucaristiasRef = useRef(null);
 */
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

    return (
        <>
            <link rel="stylesheet" href="src\assets\css\Header.css" />
                <nav className={isActive ? 'NavMainActivo' : 'NavMain'}>
                    <ul className="LogoMenu">
                        <img src="public/LogoParroquia.png" alt="Logo" className="logoParroquia" />
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
                                 Login
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
