import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import LogoCorazon from "../../Images/LogoCorazon.png";
import SeparationLine from '../../Utiles/SeparationLine';
import Buttons from '../../Utiles/Butttons';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../services/auth.service";
import Input from "react-validation/build/input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ValidationFunctions from "../../../functions/validations";

export default function Login(props) {
  const form = useRef();
  const checkBtn = useRef();
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const navigateToChangePassword = () => {
    navigate('/changePasswordPage');
  }

  function navigateToRegistrationPage(event) {
    navigate("/signup");
  }

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setMail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
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
          setMessage(resMessage);
        }
      );
    } 
  };

  const inputs = [
    {
    type:"text",
    name:"email",
    value:email,
    placeholder:"Email",
    onChange:onChangeEmail,
    validations:[ValidationFunctions.required],
  },{             
 
    type:"password",
    name:"password",
    value:password,
    placeholder:"Contraseña",
    onChange:onChangePassword,
    validations:[ValidationFunctions.required],
  }
  ];

  return (
    <>
      <div className="min-h-full md:items-center mb-10 justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-16 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-5 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoCorazon}
              alt="LogoCorazon"
              />
          </div>

          <Form className="" onSubmit={handleLogin} ref={form}>

            <div className="space-y-3 rounded-md">       
            {inputs.map((input) => {
              return (
                <>
                <div className= "relative flex flex-row bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-0 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control">
                <Input
                  type={(input.type==="password" && !passwordShown)? "password" : "text"}
                  className="bg-transparent h-12 block w-full border-transparent px-1 py-2 text-gray-900 placeholder-gray-600 focus:border-transparent focus:ring-0 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none"
                  name={input.name}
                  value={input.value}
                  placeholder={input.placeholder}
                  onChange={input.onChange}
                  validations={input.validations}
                />
                {input.type === "password" &&(
                  <span className="py-3"><FontAwesomeIcon onClick={togglePassword} icon={passwordShown? "fa-solid fa-eye-slash": "fa-solid fa-eye"} color='#000'size={14} /></span>
                )}
                </div>
{/*               /*(input.type === "password") ?
                    (showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>) 
                  :
              null*/}
                </>
              );})} 
            </div>
    
            <Buttons.SolidGreenButton text={"Iniciar Sesión"} color={"greenBg"} margins={"my-4 md:my-7"} onClick={null} ref={checkBtn}/> 
            
            <div className="grid justify-items-center">
                <button className="yellowTextHover purpleText font-Pop-R tracking-[0.5px] text-[12pt] font-semibold" onClick={navigateToChangePassword}>
                  ¿Olvidaste tu contraseña?
                </button>
            </div> 

            <SeparationLine text={"O"} margins="mt-4"/>
            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 font-Pop-R tracking-[0.5px] text-[13pt]">
                  ¿No tienes una cuenta?
                </div>
                <button className="ml-3 mb-3 greenText yellowTextHover font-Pop-R tracking-[0.5px] text-[13pt] font-semibold" onClick={navigateToRegistrationPage}>
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