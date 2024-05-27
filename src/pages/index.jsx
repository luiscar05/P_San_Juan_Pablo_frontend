import React, { useRef, useState, useEffect , Suspense,lazy} from "react";
import Inicio from "../components/inicio";
import Sacramentos from "../components/Sacramentos";
import Eucaristias from "../components/Eucaristias";
import Header from "../components/Header"
import Loader from "../components/Loader";
import Grupos from "../components/Grupos";

const loader = lazy(() => import("../components/Loader"));

function Index() {
    const inicioRef = useRef(null);
    const sacramentosRef = useRef(null);
    const eucaristiasRef = useRef(null);
    const gruposRef= useRef(null);

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
                <Suspense fallback={<Loader />}>

                    <Header 
                        Inicio={() => scrollToComponent(inicioRef)} 
                        Sacramentos={() => scrollToComponent(sacramentosRef)} 
                        Eucaristias={()=>scrollToComponent(eucaristiasRef)}
                        Grupos={()=>scrollToComponent(gruposRef)}> 
                    </Header>
                </Suspense>
            </header>
            <main>
                <section ref={inicioRef}>
                <Suspense fallback={<Loader />}>
                    <Inicio />

                </Suspense>  
                </section>
                <section ref={sacramentosRef}>
                    <Sacramentos />
                </section>
                <section ref={eucaristiasRef}>
                    <Eucaristias />
                </section>
                <section ref={gruposRef}>
                    <Grupos />
                </section>
                <section >
                    <Loader />
                </section>
                
            </main>
            <footer>
                <p>Scroll Position: {scrollPosition}px</p>
            </footer>
        </>
    );
}

export default Index;
