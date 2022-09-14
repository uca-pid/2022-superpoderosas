import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./changePassword.css";
import LogoHerramienta from "../Images/logoHerramienta.png";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const navigateToChangePassword = () => {
    navigate('/changePasswordPage');
  }

  function openRegistration(event) {
    props.onChange(event.target.userWantsToRegister);
  }

  const onChangeEmail = (email) => {
    setEmail(email);
  };


  return (
    <>
      <div className="min-h-full md:items-center mb-10 justify-items-center grid px-4 md:pb-9 mt-3 lg:mt-20 px-8 pt-10 lg:px-8 mt-3 lg:mt-20">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10">
          <div className="md:mt-8">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoHerramienta}
              alt="LogoHerramienta"
              />
          </div>

          <div className="grid justify-items-center mb-4">
                <div className="gray-300 titleText text-[17pt] font-semibold text-center">
                  ¿Tienes problemas para iniciar sesión?
                </div>
          </div>
          <div className="grid justify-items-center mb-10">
                <div className="gray-300 infoText text-[11pt]">
                Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.
                </div>
          </div>
          <Form className="" ref={form}>

            <div className="-space-y-px rounded-md shadow-sm mt-5">       
              <ClassicInput type={"text"} onChange={onChangeEmail} validations={[required]} htmlFor={"email-address"} placeholder={"Email"} id={"email"} autoComplete={"email"}  className="form-control" name="email"/>
           </div>
    
            <SolidButton text={"Enviar enlace"} color={"greenBg"} margins={"my-5 md:my-8"} onClick={{}}/> 

            <div className="flex flex-rows justify-center mt-5 mb-5 md:mb-10">
                <div className="gray-300 relevantText text-[13pt]">
                  ¿No tienes una cuenta?
                </div>
                <button className="ml-3 mb-3 yellowText greenTextHover relevantText text-[13pt] font-semibold"  >
                  Regístrate
                </button>
            </div> 
            
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </>
  );
};