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
            
        }
    }, [user,]);

    return (
        <>
            <div>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <form method="post" onSubmit={handleForm}>
                    <input type="number" name="Cedula" value={values.Cedula} onChange={handleInput} />
                    <input type="password" name="Contrasena" value={values.Contrasena} onChange={handleInput} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
};

export default Login;
