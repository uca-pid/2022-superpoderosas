import "./LogIn.css"
import LogoLucha from "../Images/Lucha.png"
import SeparationLine from '../Utiles/SeparationLine'
import Buttons from '../Utiles/Butttons'
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import Modal from "../Utiles/Modal"
import Input from "react-validation/build/input";
import ValidationFunctions from "../../functions/validations"

export default function RegistrationForm(props) {
  const [showModal, setShowModal] = React.useState(false);
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function closeModal() {
    setShowModal(false);
    navigate("/login");
    window.location.reload();
  };

  function navigateToLogInPage(event) {
    navigate("/login");
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
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

  const continuePostNavigationSuccessful = () =>{
    setShowModal(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0 && validateSamePassword()) {

      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
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
          setSuccessful(false);
        },
      );
      
    }
  };

  const inputs = [
    {
      type:"text",
      name:"email",
      value: email,
      placeholder: "Email",
      onChange: onChangeEmail,
      validations: [ValidationFunctions.required, ValidationFunctions.validEmail],
    },{
      type:"text",
      name:"username",
      value: username,
      placeholder: "Nombre de Usuario",
      onChange: onChangeUsername,
      validations: [ValidationFunctions.required, ValidationFunctions.vusername],
    },{
      type:"password",
      name:"password",
      value:password,
      placeholder:"Contraseña",
      onChange:onChangePassword,
      validations:[ValidationFunctions.required, ValidationFunctions.vpassword],
      },{
        type:"password",
        name:"password2",
        value: password2,
        placeholder: "Confirma el contraseña",
        onChange: onChangePassword2,
        validations: [ValidationFunctions.required, ValidationFunctions.vpassword],
      }
  ];


  return (
    <>  
      {showModal ? (
        <Modal value={showModal} onChange={closeModal} header={"Tu cuenta ha sido creada con exito!"} body={" Para formar parte de la comunidad y comenzar a tener un impacto, junto a Pata Pila, inicie sesión."} buttonText={"Ir a iniciar sesión"}></Modal>
      ) : null}
      {!successful && (
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-16 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-5 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 mt-5 mb-2 lg:mt-10 lg:mb-5">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoLucha}
              alt="LogoLucha"
              />
          </div>

           <Form className="" onSubmit={handleRegister} ref={form}>

            <div className="space-y-3 rounded-md mb-[-5px]">
            {inputs.map((input) => {
              return (
                <Input
                  type={input.type}
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name={input.name}
                  value={input.value}
                  placeholder={input.placeholder}
                  onChange={input.onChange}
                  validations={input.validations}
                />
              );})} 
            </div>
    
            <Buttons.SolidGreenButton text={"Registrarte"} color={"purpleBg"} margins={"my-6 md:my-6"} onClick={null} ref={checkBtn}/>

            <SeparationLine text={"O"} margins="mt-2"/>

            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[11pt] md:text-[12pt]">
                  ¿Ya tienes una cuenta?
                </div>
                <button className="ml-2 greenText yellowTextHover relevantText text-[11.5pt] md:text-[12.5pt] font-semibold" onClick={navigateToLogInPage}>
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