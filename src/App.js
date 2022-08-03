import React from "react";
import { Routes, Route} from "react-router-dom";
import "./index.css";
import Error404 from "./components/Error404";
import Login from "./components/Login";
import Register from "./components/Register";
import MoviesGrid from "./components/MoviesGrid";
import Favoritos from "./components/Favoritos"
import MoviesDetails from "./components/MoviesDetails";
import Peliculas from "./components/Peliculas";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector} from "react-redux";



function App() {
  const user = useSelector((state) => state.user);

  return (
    
    <Routes>

        <Route exact path="/login" element={<Login />} />
        <Route exact path ="/movies/:id" element={<MoviesDetails  />}/>
        <Route exact path="/peliculas/search/:value" element={<Peliculas />} />
        <Route exact path="/" element={<MoviesGrid/>} />
        <Route exact path="/register" element={<Register />} />
      {user.user ? <Route exact path="/favoritos" element={< Favoritos/>} /> :   <Route path="/*" element={< Error404 />} /> }  
      <Route path="/*" element={< Error404 />} />

  
    </Routes>
  
);
}

export default App;


  




