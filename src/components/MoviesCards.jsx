import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Cardmovie from "./Cardmovie"

const MoviesCards = ({ movies }) => {
console.log(movies)
  return (
    <>
  
      <div className="container">
       
          <div className="row row-cols-xl-5 ">
            {movies.map((movie, i) => (
             movie.poster_path  &&  
             <Cardmovie movie={movie}  key={i}/>
            ))}
          </div>
      
      </div>
    </>
  )
}

export default MoviesCards;
