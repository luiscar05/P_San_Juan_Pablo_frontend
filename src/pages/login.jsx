import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import api from "../components/Api"




const Login = () => {
    const [values, setValues] = useState({
        Cedula: "",
        Contrasena: ""
    });
    const [user, setUser] = useState(null);

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
            let responseLogin = await api.post("auth", {
                Cedula: values.Cedula,
                Contrasena: values.Contrasena
            });
            
            setUser(responseLogin.data);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    useEffect(() => {
        if (user) {
            console.log(user.access_token, "usuario que inició sesión");
            window.location.href = '/'
        }
    }, [user,]);

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
                    <h2>Login</h2>
                    <div className="inputBx">
                        <span>
                            
                        </span>
                        <input type="number" name="Cedula" value={values.Cedula} onChange={handleInput} placeholder="cedula" />
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
