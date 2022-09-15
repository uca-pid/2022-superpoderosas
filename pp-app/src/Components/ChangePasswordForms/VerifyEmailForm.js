import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./changePassword.css";
import "../LogInForm/LogIn.css";
import LogoHerramienta from "../Images/logoHerramienta.png";
import SeparationLine from '../Utiles/SeparationLine';
import SolidButton from '../Utiles/Butttons';
import ClassicInput from '../Utiles/Inputs';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import {isEmail} from "validator";
import Input from "react-validation/build/input";

const required = value => {
  if (!value) {
    return (
      <div className="alert redText alert-danger text-base m-0" role="alert">
        This field is required!
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
  const [confirmationMessage, setConfirmationMessage] = useState ("");
  const navigate = useNavigate();


  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleEmailChangeRequest = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.changeMail(email).then(
        () => {
          setConfirmationMessage("Mail Enviado");
        },
        (error) => {
          /*Error de la bd de si el mail no existe*/
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        })
    }
  }/*.then(
      
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
  };*/


  return (
    <>
      <div className="min-h-full md:items-center mb-10 justify-items-center grid px-4 md:pb-9 mt-3 lg:mt-20 px-8 pt-10 lg:px-8 mt-3 lg:mt-20">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10">
          <div className="md:mt-8">
              <img
              className="mx-auto h-[150px] md:h-40 w-auto "
              src={LogoHerramienta}
              alt="LogoHerramienta"
              />
          </div>

          <div className="grid justify-items-center mb-4">
                <div className="gray-300 titleText text-[18pt] font-semibold text-center">
                  ¿Tienes problemas para iniciar sesión?
                </div>
          </div>
          <div className="grid justify-items-center mb-10">
                <div className="text-slate-600 text-center infoText text-[11pt]">
                Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.
                </div>
          </div>
          <Form className="" ref={form}>

            <div className="-space-y-px rounded-md mt-2">
            <Input
                  type="text"
                  className="relative bg-transparent h-12 block w-full rounded-xl   border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChangeEmail}
                  validations={[required]}
                />       
           </div>
    
            <SolidButton text={"Enviar enlace"} color={"greenBg"} margins={"my-5 md:my-7"} onClick={handleEmailChangeRequest}/> 

            <div className="flex flex-rows justify-center mt-4 mb-5 md:mb-10">
                <div className="gray-300 relevantText  text-[11pt] md:text-[12pt]">
                  ¿No tienes una cuenta?
                </div>
                <button className="ml-3 mb-3 yellowText greenTextHover relevantText text-[12pt] md:text-[12pt] font-semibold"  >
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
            {confirmationMessage && (
              <div className="grid form-group justify-items-center pb-4">
              <div className="alert greenText alert-danger text-[13pt] justify-items-center" role="alert">
                {confirmationMessage}
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