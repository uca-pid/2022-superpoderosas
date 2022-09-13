import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import LogoCorazon from "../Images/LogoCorazon.png";
import SeparationLine from '../Utiles/SeparationLine';
import SolidButton from '../Utiles/Butttons';
import ClassicInput from '../Utiles/Inputs';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import {isEmail} from "validator";

/* Ver esto como se pone */
const required = value => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="grid form-group justify-items-center pb-4">
      <div className="alert redText alert-danger text-[13pt] justify-items-center" role="alert">
      This is not a valid email.
      </div>
    </div>
    );
  }
};

export default function Login(props) {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function openRegistration(event) {
    props.onChange(event.target.userWantsToRegister);
  }

  const onChangeUsername = (username) => {
    setUsername(username);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-20 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10 ">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoCorazon}
              alt="LogoCorazon"
              />
          </div>

          <Form className="" onSubmit={handleLogin} ref={form}>

            <div className="-space-y-px rounded-md shadow-sm">       
              <ClassicInput type={"text"} onChange={onChangeUsername} validations={[required]} htmlFor={"email-address"} placeholder={"Username"} id={"username"} autoComplete={"username"}  className="form-control" name="username"/>
              <ClassicInput type={"password"} onChange={onChangePassword} validations={[required]} htmlFor={"password"} placeholder={"Contraseña"} id={"password"} autoComplete={"current-password"}  className="form-control" name="password"/>
            </div>
    
            <SolidButton text={"Iniciar Sesión"} color={"greenBg"} margins={"my-5 md:my-8"} /> 

            {/* Ver como queda el mensaje de error cuando lo conectamos con al BD */}

            <div className="grid justify-items-center">
                <a href="#" className="yellowTextHover purpleText placeholderText font-semibold">
                  ¿Olvidaste tu contraseña?
                </a>
            </div> 

            <SeparationLine text={"O"} margins="mt-4"/>
            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[13pt]">
                  ¿No tienes una cuenta?
                </div>
                <button className="ml-3 mb-3 greenText yellowTextHover relevantText text-[13pt] font-semibold" onClick={openRegistration} ref={checkBtn}>
                  Regístrate
                </button>
            </div> 

            {message && (
            <div className="grid form-group justify-items-center pb-4">
              <div className="alert redText alert-danger text-[13pt] justify-items-center" role="alert">
                {message}
              </div>
            </div>
            )}
            
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </>
  );
};