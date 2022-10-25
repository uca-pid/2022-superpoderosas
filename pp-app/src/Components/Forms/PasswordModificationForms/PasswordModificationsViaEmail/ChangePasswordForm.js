import LogoHerramienta from "../../../../Components/Images/logoHerramienta.png";
import Buttons from '../../../../Components/Utiles/Butttons';
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../../services/auth.service";
import Input from "react-validation/build/input";
import { useParams } from 'react-router-dom';
import Modal from "../../../Utiles/Modal"
import ValidationFunctions from "../../../../functions/validations";
import "../../../../App.css"
import Messages from "../../Messages";

export default function ChangePasswordForm(props)  {
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
      AuthService.updatePasswordViaEmail(params.token,password).then(
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
      <div className="min-h-full md:items-center mb-10 justify-items-center grid px-4 md:pb-9  ">
        <div className="grid content-center w-full rounded-3xl max-w-sm space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-14 md:py-6 h-fit my-5 lg:my-20">
          <div className="">
              <img
              className="mx-auto h-32 w-auto"
              src={LogoHerramienta}
              alt="LogoHerramienta"
              />
          </div>

           <Form className="" onSubmit={handlePasswordChange} ref={form}>

           <div className="grid justify-items-center mb-5">
                <div className="gray-300 font-Pop-SB uppercase tracking-[0.5px] text-base text-center">
                  Cambiar contraseña
                </div>
          </div>

            <div className="space-y-2 rounded-md mt-2">       
                <Input
                  type="password"
                  className="relative bg-transparent block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R text-xs tracking-[0.5px] focus:outline-none greenBorderWhenFocus form-control"
                  name="password"
                  value={password}
                  placeholder="Contraseña nueva"
                  onChange={onChangePassword}
                  validations={[ValidationFunctions.required, ValidationFunctions.vpassword]}
                />
                <Input
                  type="password"
                  className="relative bg-transparent block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R text-xs tracking-[0.5px] focus:outline-none greenBorderWhenFocus form-control"
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
            <Messages.ErrorMessage message={message}/>
            )}
            
          </Form>
        </div>
      </div>
</>
  )
}