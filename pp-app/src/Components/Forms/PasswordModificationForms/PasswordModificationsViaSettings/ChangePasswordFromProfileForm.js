import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../../services/auth.service";
import Input from "react-validation/build/input";
import Modal from "../../../Utiles/Modal"
import { useNavigate } from "react-router-dom";
import ValidationFunctions from "../../../../functions/validations";
import "../../../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChangePasswordFromProfileForm = (props) =>{
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [message, setMessage] = useState("");
  const currentUser = AuthService.getCurrentUser();
  const [confirmationMessage, setConfirmationMessage] = useState ("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);

  const continuePostNavigationSuccessful = () =>{
    setShowModal(true);
  };
  
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const toggleNewPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setNewPasswordShown(!newPasswordShown);
  };
  
  function closeModal() {
    setShowModal(false);
    navigate("/profile");
    window.location.reload();
  };

  function closeForm(event) {
    props.onClose();
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeOldPassword = (e) => {
    const password = e.target.value;
    setOldPassword(password);
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
    setConfirmationMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0 && validateSamePassword()) {
      AuthService.updatePasswordViaSettings(currentUser.id, oldpassword, password).then(
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
    return(
        <>

      {showModal ? (
        <Modal value={showModal} onChange={closeModal} header={"Tu contraseña ha sido cambiada con exito!"} body={""} buttonText={"Continuar"}></Modal>
      ) : null}

            <Form className="p-11 blackText flex flex-col space-y-5" onSubmit={handlePasswordChange} ref={form}>
            
            <div className="tracking-wide font-Pop-M font-medium uppercase blackText font-bold">Cambiar contraseña </div>

              <div className="space-y-4 rounded-md mb-[-5px] flex-rows">
                <div className="flex flex-col space-x-4">
                  <div className= "relative flex flex-row bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-0 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control">
                  <Input
                    type={(!passwordShown)? "password" : "text"}
                    className="bg-transparent h-12 block w-full border-transparent px-1 py-2 text-gray-900 placeholder-gray-600 focus:border-transparent focus:ring-0 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none"
                    name="oldpassword"
                    value={oldpassword}
                    placeholder="Contraseña antigua"
                    onChange={onChangeOldPassword}
                    validations={[ValidationFunctions.required]}
                  />
                  <span className="py-3 px-20"><FontAwesomeIcon onClick={togglePassword} icon={passwordShown? "fa-solid fa-eye-slash": "fa-solid fa-eye"} color='#000'size={14} /></span>
                  </div>   
                </div>
                <div className="flex flex-col space-x-4">
                  <div className= "relative flex flex-row bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-0 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control">
                  <Input
                    type={(!newPasswordShown)? "password" : "text"}
                    className="bg-transparent h-12 block w-full border-transparent px-1 py-2 text-gray-900 placeholder-gray-600 focus:border-transparent focus:ring-0 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none"
                    name="password"
                    value={password}
                    placeholder="Contraseña nueva"
                    onChange={onChangePassword}
                    validations={[ValidationFunctions.required, ValidationFunctions.vpassword]}
                  />
                  <span className="py-3 px-20"><FontAwesomeIcon onClick={toggleNewPassword} icon={newPasswordShown? "fa-solid fa-eye-slash": "fa-solid fa-eye"} color='#000'size={14} /></span>
                  </div>   
                </div>
                <div className="flex flex-col space-x-4"> 
                  <Input
                    type="password"
                    className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control"
                    name="password2"
                    value={password2}
                    placeholder="Confirmar contraseña"
                    onChange={onChangePassword2}
                    validations={[ValidationFunctions.required]}
                  />
                </div>
            </div>

            {message && (
              <div className="grid form-group pb-4 justify-items-center pb-4 mb:-mt-10  lg:-mt-7">
                <div className="alert text-center redText font-Pop-M tracking-[0.5px] uppercase alert-danger text-[13pt] justify-items-center" role="alert">
                  {message}
                </div>
              </div>
              )}
              {confirmationMessage && (
              <div className="grid form-group justify-items-center pb-4 mb:-mt-10  lg:-mt-7">
              <div className="alert text-center greenText font-Pop-M tracking-[0.5px] uppercase alert-danger text-[13pt] justify-items-center" role="alert">
                {confirmationMessage}
              </div>
              </div>
            )}

            <div className="flex flex-rows justify-between pt-4">
              <button onClick={closeForm} className="mx-3 py-3 h-fit px-7 greyBg rounded-xl tracking-widest font-Pop-M uppercase font-medium text-gray-500 duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white text-lg">Cancelar</button>
              <button onClick={null} className="mx-3 py-3 h-fit px-7 bg-[#0F6938] text-white rounded-xl tracking-widest font-Pop-M uppercase font-medium duration-700 hover:bg-[#6c3333] focus:bg-[#6c3333]  text-lg">Guardar Cambios</button>
            </div> 

            <CheckButton style={{ display: "none" }} ref={checkBtn} />

              
            </Form>
        </>
    );
}

export default ChangePasswordFromProfileForm;