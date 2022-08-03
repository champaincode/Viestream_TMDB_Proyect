import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import stylee from "./peliculas.module.css"
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import MoviesCards from './MoviesCards';

const Peliculas = ({}) => {
  const [matchMovies,setMatchMovies] = useState([])
  const {value} = useParams()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cd5e10dabb254ecc6656deba335aff92&language=es-ES&query=${value}`)
    .then((res)=>{setMatchMovies(res.data.results)})
  }, [value])
  
  return (
    <div className={stylee.bgSearch}>
        <Navbar  />
        <h1 className="text-white fst-italic fst-italic text-center  text-header">
         Buscar Peliculas
         </h1>
        <MoviesCards movies={matchMovies}  />

</div>
  )
}

export default Peliculas

