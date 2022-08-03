import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setLogout } from "../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Search from "./Search";

function Navbar() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  function handleLogout(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/logout")
      .then((res) => {
         localStorage.removeItem("user");
        dispatch(setLogout(res.data.user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "ESTE ES EL ERROR");
      });
 
  }
  function handlerFavorites(e) {
    e.preventDefault();
    navigate("/favoritos");
  }
  function handlerLogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  function handlerRegister(e) {
    e.preventDefault();
    navigate("/register");
  }


  function handlerHome(e) {
    e.preventDefault();
    navigate("/");
  }



  return (
    <nav className="navbar navbar-expand-lg bg-primary">
       
      <div className="container">
  
        <svg
          onClick={handlerHome}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-gem logo"
          viewBox="0 0 16 16"
        >
          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
        </svg>
        <a onClick={handlerHome} className="navbar-brand  text-light " href="#">
          ViewStream
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <a
                onClick={handlerHome}
                className="nav-link text-info"
                href="#"
                aria-current="page"
              >
               Inicio
              </a>
            </li>
            {user?.user && 
              <li className="nav-item">
                <a
                  onClick={handlerFavorites}
                  className="nav-link text-info"
                  href="#"
                >
                  Favoritos
                </a>
              </li>
              
            }
       

            {user?.user  && <li className="nav-item">
              <a className="nav-link text-warning"> Bienvenido/a {user.user}!</a>
            </li>
          }
              
           </ul> 
          {/* nombre del usuario */}
          <Search />

          <div className="dropdown text-end d-flex justify-content-end ">
        { user?.user ?  <button
         
               className="button-inicio "
               onClick={handleLogout}
               alt="Cerrar Sesion"
             >
            <i>C</i>
            <i>e</i>
            <i>r</i>
            <i>r</i>
            <i>a</i>
            <i>r</i>

            <i className="separado">S</i>
            <i>e</i>
            <i>s</i>
            <i>i</i>
            <i>o</i>
            <i>n</i>
               
             </button>  
       
            :
            <div  className="botones"  >
            <button  onClick={handlerLogin} className="button-inicio"   alt="Iniciar Session" style={{textDecoration:"none", color:"black", marginRight:"10px"}}> 
            <i>I</i>
            <i>n</i>
            <i>i</i>
            <i>c</i>
            <i>i</i>
            <i>a</i>
            <i>r</i>
          
            <i className="separado">S</i>
            <i>e</i>
            <i>s</i>
            <i>s</i>
            <i>i</i>
            <i>o</i>
            <i>n</i>

</button>
            <button onClick={handlerRegister}className="button-registrarme"  alt="Registrarme" style={{textDecoration:"none", color:"black"}}>  
            <i>R</i>
            <i>e</i>
            <i>g</i>
            <i>i</i>
            <i>s</i>
            <i>t</i>
            <i>r</i>
            <i>a</i>
            <i>r</i>
            <i>m</i>
            <i>e</i>
          </button>
            </div>
          } 
       
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
