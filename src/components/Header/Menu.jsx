import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Menu = (props) => {
  const location = useLocation();
  const isTokenPresent = document.cookie.includes("token=");

  const { user, loggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <div className="block px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-semibold font-poppins text-base">
        <Link
          to="/"
          className="block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
          onClick={props.toggleLVisibility}
        >
          <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
            Inicio
          </div>
        </Link>
        <Link
          to="/Blog"
          className="block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO  "
          onClick={props.toggleLVisibility}
        >
          <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
            Blog
          </div>
        </Link>

        {user.rol === "admin" && (
          <>

            <Link
              to="/Admin"
              className={`block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO   ${
                location.pathname === "/Registro" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Admin
              </div>
            </Link>
          </>
        )}

        {!isTokenPresent && (
          <>
            <Link
              to="/Login"
              className={`block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO   ${
                location.pathname === "/Login" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Login
              </div>
            </Link>

            <Link
              to="/Registro"
              className={`block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO   ${
                location.pathname === "/Registro" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Registro
              </div>
            </Link>
          </>
        )}

        {isTokenPresent && loggedIn && (
          <>
            <Link
              to="/Reserva"
              className="block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO  "
              onClick={props.toggleLVisibility}
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Reserva
              </div>
            </Link>
            <Link
              to="/Profile"
              className="block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO  "
              onClick={props.toggleLVisibility}
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Perfil
              </div>
            </Link>
            <Link
              to="/"
              className="block md:inline-block rounded-md text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO  "
              onClick={logout} // Utilizar la función logout para realizar el logout
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2">
                Logout
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
