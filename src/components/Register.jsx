import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate()

    const onSubmit = (data,e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/user/register", data)
        .then((res) => res.data)
          navigate("/login")
          alert("USUARIO CREADO")
        };


  return (
    <div>  <div>
    <div className="container position-absolute top-50 start-50 translate-middle  ">
      <div className="row">
        
        <div className="col"></div>
        <div className="col"></div>

        <h2 className="fw-bold text-center">Crea tu cuenta de Viewstream </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          className="bi bi-gem logo_login con"
          viewBox="0 0 16 16"
        >
          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
        </svg> 
        {/* REGISTER */}
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-4">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label for="text" class="form-label">
                User
            </label>
            <input
              type="text"
              className="form-control"
              name="text"
              {...register("user", { required: true })}
              error={!!errors?.user}
              required
            />
          
          </div>
          <div className="mb-4">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="Password"
              {...register("password", { required: true })}
              error={!!errors?.password}
              required
            />
          </div>

       
          <div className="d-grid mt-1">
           <button className="btn btn-primary"> Registrate</button>
     
            
          
             <div className="mb-4 form-check">
     
      
      </div> 
          </div>
        
        </form>
          </div>
          <div className="col"></div>
          </div>
        
      </div>
    </div>
  </div></div>
  )
}

export default Register