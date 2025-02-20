import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider"; // Ruta relativa al archivo AuthProvider

const API = import.meta.env.VITE_LOGIN_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { getDecodedData, loggedIn } = useContext(AuthContext); // Obtener la función getDecodedData del contexto

  //Comprobación de la existencia de un token
  useEffect(() => {
    if (loggedIn) {
      Swal.fire({
        icon: "success",
        title: "Ya estas Logueado",
        text: "¡Bienvenido!",
      }).then(() => {
        navigate("/");
      });
    }
  }, [loggedIn]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API, {
        correo: email,
        contraseña: password,
      });

      const { token } = response.data.usuario;

      // Guardar el token como una cookie
      document.cookie = `token=${token}; path=/`;

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "¡Bienvenido!",
      }).then(() => {
        getDecodedData();
        navigate("/");
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: "Por favor, verifica tus credenciales e intenta nuevamente.",
      });
    }
  };

  return (
    <section className="bg-MoradoO dark:bg-black p-4">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-7"
        >
          <img className="h-40 inline " src="./logo.png" alt="" />
        </a>
        <div className="w-full bg-Moradote rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-MoradoO dark:border-VerdeC">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Accede a tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-MoradoO/30 border border-MoradoO text-white placeholder:text-white/50 sm:text-sm rounded-lg focus:border-2 focus:border-MoradoO focus:ring-0 block w-full p-2.5 dark:border-VerdeC/50 dark:focus:border-VerdeC"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-MoradoO/30 border border-MoradoO text-white placeholder:text-white/50 sm:text-sm rounded-lg focus:border-2 focus:border-MoradoO focus:ring-0 block w-full p-2.5  dark:border-VerdeC/50 dark:focus:border-VerdeC"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg py-3.5 font-semibold text-center border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoO/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO text-white bg-MoradoO/30 dark:bg-Moradote"
              >
                Ingresar
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center p-4 bg-Moradote border-t dark:bg-MoradoO dark:border-VerdeC/50 border-MoradoO">
            <span className="text-sm text-white">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/Registro"
                className="text-white font-bold hover:text-white/80"
              >
                Registro
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
