import React, { useRef, useState, useEffect , Suspense,lazy, useContext} from "react";
import Loader from "../components/Loader";
import { UserContext , UserContextProvider} from "../components/contex/UserContextProvider";
/* import { useSelector } from "react-redux"; */

const Inicio = lazy(() => import("../components/inicio"));
const Sacramentos = lazy(() => import("../components/Sacramentos"));
const Eucaristias = lazy(() => import("../components/Eucaristias"));
const Header = lazy(() => import("../components/Header"));
const Grupos = lazy(() => import("../components/Grupos"));


function Index() {
    const { user } = useContext(UserContext);

    /* const User = useSelector((state)=>state.user) */
    /* const {user}=useContext(UserContex) */
    const inicioRef = useRef(null);
    const sacramentosRef = useRef(null);
    const eucaristiasRef = useRef(null);
    const gruposRef= useRef(null);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isActive, setIsActive] = useState(false);
    /* console.log(user,"Usuario Iniciado") */
    console.log(user,"usuario Iniciado")
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
        <UserContextProvider>

        
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
                    <h2>{user ? `Hola, ${user}` : "Hola"}</h2>
                </Suspense>  
                </section>
                <section ref={sacramentosRef}>
                    <Suspense fallback={<Loader />}> 
                        <Sacramentos />
                    </Suspense>
                </section>
                <section ref={eucaristiasRef}>
                    <Suspense fallback={<Loader />}>
                        <Eucaristias />
                    </Suspense>
                </section>
                <section ref={gruposRef}>
                    <Suspense fallback={<Loader />}>
                        <Grupos />
                    </Suspense>
                </section>
                
                
            </main>
            <footer>
                <p>Scroll Position: {scrollPosition}px</p>
            </footer>
            </UserContextProvider>
        </>
    );
}

export default Index;
