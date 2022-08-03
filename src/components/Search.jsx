import axios from "axios";
import React ,  {useState}  from "react";
import { useNavigate, Link } from "react-router-dom";


const Search = () => {

const [value, setValue] = useState("")
const navigate = useNavigate()

function handlerSummit(e) {
  e.preventDefault()
  if (value === "" ) {
    alert("¡OH, Por lo visto no escribiste nada, intenta escribiendo algo !")
  }else{
    navigate("/peliculas/search/" + value)
  }
 
  
}

function handlerChange(e) {
  setValue(e.target.value)
}



  return (
    <div>
 
      <div className="container mt-2">
       <div className="row">
      <div className="col-xl-1 col-md-2 col-0"></div>
        <div className="col-11 col-md-8 col-sm-12 col-xl-11 mb-2">
        <form onSubmit={handlerSummit} className="container d-flex" role="search">
        <button alt="Buscar">
            <i>B</i>
            <i>u</i>
            <i>s</i>
            <i>c</i>
            <i>a</i>
            <i>r</i>
          </button>
          <input
            className="form-control me-1 "
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
            onChange={handlerChange}
          />

        
        </form>
        </div>
      
        
      </div>
       
      </div>
    </div>
    
  );
};

export default Search;















