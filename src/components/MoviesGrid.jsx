import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import MoviesCards from "./MoviesCards";
import Search from "./Search";
import style from "./moviesgrid.module.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=cd5e10dabb254ecc6656deba335aff92&language=es-ES"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  return (   
    <div className={style.backGr}>

<Navbar  />

      <h1 className="text-white fst-italic fst-italic text-center  text-header">
          Inicio
        </h1>
    
          <MoviesCards movies={movies}  />
    </div>
  )
};

export default MoviesGrid;
