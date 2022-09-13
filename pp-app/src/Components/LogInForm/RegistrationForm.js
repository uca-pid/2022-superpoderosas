import "./LogIn.css"
import LogoLucha from "../Images/Lucha.png"
import SeparationLine from '../Utiles/SeparationLine'
import SolidButton from '../Utiles/Butttons'
import ClassicInput from '../Utiles/Inputs'
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";
const required = (value) => {
  if (!value) {
    console.log("required!");
    return (
      <div className="invalid-feedback d-blockalert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    console.log("invalid email!");
    return (
      <div className="invalid-feedback d-block alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function RegistrationForm(props) {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function openLogIn(event) {
    props.onChange(event.target.userWantsToRegister);
  }

  const onChangeUsername = (username) => {
    setUsername(username);
  };
  const onChangeEmail = (email) => {
    setEmail(email);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
      navigate("/login");
      window.location.reload();
    }
  };

  return (
    <>
      {!successful && (
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-20 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 mt-5 mb-2 lg:mt-10 lg:mb-5">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoLucha}
              alt="LogoLucha"
              />
          </div>

           <Form className="" onSubmit={handleRegister} ref={form}>

            <div className="-space-y-px rounded-md shadow-sm mb-[-5px]">       
              <ClassicInput type={"text"} onChange={onChangeEmail} validations={[required, validEmail]} htmlFor={"email-address"} placeholder={"Email"} id={"email"} autoComplete={"email"}/>
              <ClassicInput type={"text"} onChange={onChangeUsername} validations={[required, vusername]} htmlFor={"username"} placeholder={"Nombre de usuario"} id={"username"} autoComplete={"username"}/>
              <ClassicInput type={"password"} onChange={onChangePassword} validations={[required, vpassword]} htmlFor={"password"} placeholder={"Contraseña"} id={"password"} autoComplete={"current-password"}/>
            </div>
    
            <SolidButton text={"Registrarte"} color={"purpleBg"} margins={"my-2 md:my-6"}/>

            <SeparationLine text={"O"} margins="mt-2"/>

            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[12pt]">
                  ¿Ya tienes una cuenta?
                </div>
                <button className="ml-2 greenText yellowTextHover relevantText text-[12.5pt] font-semibold" onClick={openLogIn}>
                  Iniciar Sesión
                </button>
            </div> 

          <CheckButton style={{ display: "none" }} ref={checkBtn} />

          {message && (
            <div className="grid form-group justify-items-center pb-4">
              <div className="alert redText alert-danger text-[13pt] justify-items-center" role="alert">
                {message}
              </div>
            </div>
            )}
            
          </Form>
        </div>
      </div>)}
    </>
  )
}