import "../../Components/LogInForm/LogIn.css";
import LogoHerramienta from "../../Components/Images/logoHerramienta.png";
import Buttons from '../../Components/Utiles/Butttons';
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import "../ChangePassword Page/ChangePasswordPage.css"
import AuthService from "../../services/auth.service";
import Input from "react-validation/build/input";
import { useParams } from 'react-router-dom';
import { Popover} from '@headlessui/react';
import Modal from "../../Components/Utiles/Modal"
import ValidationFunctions from "../../functions/validations";

export default function RegistrationForm(props) {
  const form = useRef();
  const [showModal, setShowModal] = React.useState(false);
  const checkBtn = useRef();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const continuePostNavigationSuccessful = () =>{
    setShowModal(true);
  };

  
  function closeModal() {
    setShowModal(false);
    navigate("/login");
    window.location.reload();
  };

  function navigateToLogIn(){
      navigate("/login");
      window.location.reload(); 
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePassword2 = (e) => {
    const password2 = e.target.value;
    setPassword2(password2);
  };

  const validateSamePassword = () =>{
    if (password !== password2) {
      setMessage('Las contraseñas deben coincidir!');
      return false;
    }else{
      return true;
    }
  }


  const handlePasswordChange = (e) => {
    e.preventDefault();
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0 && validateSamePassword()) {
      AuthService.updatePassword(params.token,password).then(
        (response) => {
          continuePostNavigationSuccessful();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        },
      );
      
    }
  };

  return (
    <>  
        {showModal ? (
        <Modal value={showModal} onChange={closeModal} header={"Tu contraseña ha sido cambiada con exito!"} body={"Inicie sesión para continuar contribuyendo a la comunidad."} buttonText={"Ir a iniciar sesión"}></Modal>
      ) : null}
  <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 greenBg bg-cover h-screen bg-cover place-content-center">
    <Popover>
      <nav className="bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-6 md:px-8 lg:px-8 pt-10" aria-label="Global">
        <div className="mt-8 mx-auto flex flex-row justify-around lg:mx-8">
            <div className="flex flex-row justify-between w-full mx-3 lg:mx-0 lg:basis-2/5">
                <div className=''>
                    <a href="https://patapila.org/index.php">
                    <img
                        className="w-[180px] mt-[20px] md:mt-0 md:w-[260px] lg:w-[260px] h-auto"
                        src="https://patapila.org/assets/img/logo_3.svg"
                        alt="Pata Pila Logo"
                    />
                    </a>
                </div>
            </div>
          <div className="justify-end flex-1 mx-auto mt-6 md:mt-7 lg:mt-2 lg:basis-3/5 lg:pr-4 lg:pt-8 lg:flex lg:flex-row">
            <button onClick={navigateToLogIn} className = {"navBarLoginTextButton navBarLoginButtonBorder"}>Log In</button>
          </div>
        </div>
      </nav>
      </Popover>
      <div className="min-h-full md:items-center mb-10 justify-items-center grid px-4 md:pb-9 mt-3 lg:mt-20 px-8 pt-10 lg:px-8 mt-3 lg:mt-20">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10">
         <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoHerramienta}
              alt="LogoHerramienta"
              />
          </div>

           <Form className="" onSubmit={handlePasswordChange} ref={form}>

           <div className="grid justify-items-center mb-9">
                <div className="gray-300 titleText text-[18pt] font-semibold text-center">
                  Cambiar contraseña
                </div>
          </div>

            <div className="space-y-3 rounded-md mb-[-5px]">       
                <Input
                  type="password"
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="password"
                  value={password}
                  placeholder="Contraseña nueva"
                  onChange={onChangePassword}
                  validations={[ValidationFunctions.required, ValidationFunctions.vpassword]}
                />
                <Input
                  type="password"
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="password2"
                  value={password2}
                  placeholder="Confirmar contraseña"
                  onChange={onChangePassword2}
                  validations={[ValidationFunctions.required]}
                />
              
            </div>
    
            <Buttons.SolidGreenButton text={"Guardar cambios"} color={"purpleBg"} margins={"my-6 md:my-6"} onClick={null}/>
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
      </div>
    </div>
    </>
  )
}