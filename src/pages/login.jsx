import React, { useState, useEffect, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Api from "../components/Api.jsx";
import { useDispatch } from "react-redux";
import {App} from "../App.jsx"
import { UserContext } from "../components/contex/UserContextProvider.jsx";
/* import { addUser } from "../redux/userSlice.js"; */


const Login = () => {
    const {user,setUser}= useContext(UserContext)
    /* const dispatch = useDispatch() */
    const Navigate= useNavigate()
    const [values, setValues] = useState({
        Cedula: "",
        Contrasena: ""
    });
    /* const [user, setUser] = useState(); */
    const [Credenciales, setCredenciales]=useState(false)

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: name === "Cedula" ? parseInt(value) : value,
        });
    };
    const handleForm = async (event) => {
        event.preventDefault();
        console.log(values);
        try {
            let responseLogin = await Api.post("auth", {
                Cedula: values.Cedula,
                Contrasena: values.Contrasena
            });

            let UserLogin = await Api.get("auth/verify")


           console.log(UserLogin,"user") 
            setUser(UserLogin) 
        } catch (error) {
            console.error("Error al iniciar sesión:", error);  
            setCredenciales(true)
        }
    };

    useEffect(() => {
        if (user) {
            console.log(user, "usuario que inició sesión");
            const userForHistory = { ...user };
            delete userForHistory.someFunction; // Elimina una función
            Navigate('/Dashboard'); /// Redirige a la página dl dashboard
        }
    }, [user,Navigate]);



    return (
        <>
            <link rel="stylesheet" href="src\assets\css\login.css" />
            <link rel="stylesheet" href="src\assets\css\Header.css" />

            <div className="button">
                <a  className="ButtonA" style={{ '--clr': '#1e9bff' }}>
                    <span>
                        <Link to={'/'} style={{"textDecoration":"none"}}> 
                            Home
                        </Link>
                    </span>
                    <i className="CuadroI"></i>
                </a>
            </div>
            <div className="box">
            
                <form method="post" onSubmit={handleForm}>
                    {Credenciales && <h4>Error en las credenciales</h4>}  
                    <h2>Login</h2>
                    <div className="inputBx">
                        <span>
                            
                        </span>
                        <input type="text" name="Cedula" value={values.Cedula} onChange={handleInput} placeholder="cedula" />
                    </div>
                    <div className="inputBx">
                        <span>
                            
                        </span>
                        <input type="password" name="Contrasena" value={values.Contrasena} onChange={handleInput} placeholder="Contraseña" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                {/* <button>
                    <Link to="/">Home</Link>
                </button> */}
               {/* <form method="post" onSubmit={handleForm}>
                    <input type="number" name="Cedula" value={values.Cedula} onChange={handleInput} />
                    <input type="password" name="Contrasena" value={values.Contrasena} onChange={handleInput} />
                    <button type="submit">Login</button>
                </form> */}
            </div>
        </>
    );
};

export default Login;
