import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getFavorite } from "../store/favoritos";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Cardmovie = ({ movie }) => {
  const favorites = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const setColor = () => {
    if (favorites) {
      if (favorites.length)
        return favorites.find((mov) => mov.code === movie.id);
    }
  };
  const [fav, setFav] = useState(() => {
    return favorites.includes(movie);
  });
  const user = useSelector((state) => state.user);
  const handleAdd = () => {
    if (favorites.find((mov) => mov.id === movie.id)) {
      axios
        .delete("http://localhost:5000/api/favoritos/remove", {
          data: { code: movie.code, userId: user.id },
        })
        .then(() => {dispatch(getFavorite(user.id)); alert( `Quitaste ${movie.original_title} de tus favoritos` )});
    } else {
      axios
        .post("http://localhost:5000/api/favoritos/add", {
          original_title: movie.original_title,
          code: movie.id,
          poster_path: movie.poster_path,
          overview: movie.overview,
          userId: user.id,
          vote_average: movie.vote_average,
        })
        .then(() =>  {dispatch(getFavorite(user.id)); alert("CHURROSSS")});
    }

    setFav(!fav);
  };
  return (
    <>
      <div className="col-lg-3 col-md-4 col-7 col-sm-6   mt-4 mb-3 ">
        <div class="d-flex justify-content-around"></div>
        <div className="card-edit ">
          <div className="card-img ">
            <img
              className="img-card"
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="calificaciones_rigth">
            <FontAwesomeIcon className="circulo" icon={faStar} />
            <p class=" text-calificaciones">{Math.floor(movie.vote_average)}</p>
          </div>
          <div className="card-info d-flex flex-column text-center  align-items-center  ">
            {movie.original_title.length > 25 ? (
              <p class="text-title fs-5 ">
                {movie.original_title.slice(0, 23) + "..."}
              </p>
            ) : (
              <p class="text-title fs-5">{movie.original_title}</p>
            )}
            <div className="d-flex">
              <Link
                to={`/movies/${movie.id ? movie.id : movie.code}`}
                style={{ display: "flex" }}
              >
                <button className="card-button ">Ver más</button>
              </Link>

              {user.user && (
                <BsFillSuitHeartFill
                  onClick={() => handleAdd()}
                  className="iconCorazon"
                  style={{ color: setColor() ? "red" : "white" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardmovie;
