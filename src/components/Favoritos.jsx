import React,{useEffect} from "react";
import Navbar from "./Navbar";
import stylee from "./favoritos.module.css"
import { getFavorite } from "../store/favoritos";
import { useSelector, useDispatch } from "react-redux";
import MoviesCards from "./MoviesCards";


const Favoritos = () => {
  const favorites = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getFavorite(user.id))
  }, []);

  console.log(favorites)

  return (

    

  <div  className={stylee.bgFav}>
  <Navbar/>
  <h1 className="text-white fst-italic fst-italic text-center  text-header ">Favoritos</h1>
 {favorites.length ? <MoviesCards movies={favorites}/>:""}
 <div className="container mt-5">
 {!favorites.length && <p className="text-warning fst-italic fst-italic text-center  text-header " >NO TENES FAVORITOS CARGADOS... </p> }
 </div>

  </div>
  

  );
};

export default Favoritos;
