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
import Modal from "../Utiles/Modal"
import Input from "react-validation/build/input";


const required = (value) => {
  if (!value) {
    console.log("required!");
    return (
      <div className="alert redText alert-danger text-base m-0" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    console.log("invalid email!");
    return (
      <div className="alert redText alert-danger text-base m-0" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert redText alert-danger text-base m-0" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert redText alert-danger text-base m-0" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function RegistrationForm(props) {
  const [showModal, setShowModal] = React.useState(false);
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  function closeModal() {
    setShowModal(false);
    navigate("/login");
    window.location.reload();
  };

  function openLogIn(event) {
    props.onChange(event.target.userWantsToRegister);
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

  const continuePostNavigationSuccessful = () =>{
    setShowModal(true);
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

  return (
    <>  
      {showModal ? (
        <Modal value={showModal} onChange={closeModal} header={"Ya tienes una cuenta!"} body={" Para formar parte de la comunidad y comenzar a tener un impacto, junto a Pata Pila, inicie sesión."} buttonText={"Ir a iniciar sesión"}></Modal>
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
              {/* <ClassicInput type={"text"} onChange={onChangeEmail} validations={[required, validEmail]} htmlFor={"email-address"} placeholder={"Email"} id={"email"} autoComplete={"email"}/> 
              <ClassicInput type={"text"} onChange={onChangeUsername} validations={[required, vusername]} htmlFor={"username"} placeholder={"Nombre de usuario"} id={"username"} autoComplete={"username"}/>
              <ClassicInput type={"password"} onChange={onChangePassword} validations={[required, vpassword]} htmlFor={"password"} placeholder={"Contraseña"} id={"password"} autoComplete={"current-password"}/>*/}
              
                <Input
                  type="text"
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="username"
                  value={username}
                  placeholder="Nombre de Usuario"
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
          
                <Input
                  type="text"
                  className="relative bg-transparent h-12 block w-full rounded-xl  border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
             
                <Input
                  type="password"
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm form-control"
                  name="password"
                  value={password}
                  placeholder="Contraseña"
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              
            </div>
    
            <SolidButton text={"Registrarte"} color={"purpleBg"} margins={"my-6 md:my-6"} onClick={null}/>

            <SeparationLine text={"O"} margins="mt-2"/>

            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[11pt] md:text-[12pt]">
                  ¿Ya tienes una cuenta?
                </div>
                <button className="ml-2 greenText yellowTextHover relevantText text-[11.5pt] md:text-[12.5pt] font-semibold" onClick={openLogIn}>
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