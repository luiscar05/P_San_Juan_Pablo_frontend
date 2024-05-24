import React, { useRef, useState, useEffect } from "react";
import Inicio from "../components/inicio";
import Sacramentos from "../components/Sacramentos";
import Eucaristias from "../components/Eucaristias";
import Header from "../components/Header"
import Loader from "../components/Loader";

function Index() {
    const inicioRef = useRef(null);
    const sacramentosRef = useRef(null);
    const eucaristiasRef = useRef(null);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isActive, setIsActive] = useState(false);
    

    const scrollToComponent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Actualiza isActive en base al scrollPosition
        /* setIsActive(scrollPosition >= 40); */

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        setIsActive(scrollPosition >= 40)
    },[scrollPosition])

    useEffect(()=>{
        setTimeout(() => {
            scrollToComponent(inicioRef);
        }, 0);
        
    },[])

     
     
     // Dependencia de scrollPosition para actualizar el valor

    console.log(scrollPosition, "esto es scroll");

    return (
        <>
            <link rel="stylesheet" href="src\assets\css\style.css" />
           
            <header>
              <Header 
              Inicio={() => scrollToComponent(inicioRef)} 
              Sacramentos={() => scrollToComponent(sacramentosRef)} 
              Eucaristias={()=>scrollToComponent(eucaristiasRef)}></Header>
            </header>
            <main>
                <section ref={inicioRef}>
                    <Inicio />
                </section>
                <section ref={sacramentosRef}>
                    <Sacramentos />
                </section>
                <section ref={eucaristiasRef}>
                    <Eucaristias />
                </section>
                
            </main>
            <footer>
                <p>Scroll Position: {scrollPosition}px</p>
            </footer>
        </>
    );
}

export default Index;
