import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import style from "./moviesgrid.module.css"
import styleDetail from "./moviesDetails.module.css"


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=cd5e10dabb254ecc6656deba335aff92&language=es-ES`
      )
      .then((res) => setMovie(res.data));
  }, [id]);





  return (
    <div className={styleDetail.backGr}> 
    <Navbar/>
    <div className={styleDetail.containerSupremo}>
      <div className={styleDetail.containerSuper}>
      <div className={styleDetail.containerAll}>
        <img
          className={`${styleDetail.imgSize} ${styleDetail.movieImg}`}
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt="" width={"100%"}
        />
        
    
        </div>
        <div className={styleDetail.acomodar}>
        <div className={styleDetail.contein}>
        <span className={styleDetail.span}>
          {movie.original_title}
       </span><p className={styleDetail.resumen}>RESUMEN </p>
        <p className={styleDetail.genero}></p>
       <p>{movie.overview}</p>
          </div>
      </div>
    </div>
    </div>
    </div>
  )
};

export default MovieDetails;


