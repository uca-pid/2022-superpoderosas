/*import React, { useState } from 'react';

export default function PasswordResetPage() {

  return (
    <>
    <form action="/resetpassword" method="POST">
        <input type="hidden" name="token" value="' + req.params.token + '" />
        <input type="password" name="password" value="" placeholder="Enter your new password..." />
        <input type="submit" value="Reset Password" />
    </form> 
    </>
  )
}*/
import "../../Components/LogInForm/LogIn.css"
import LogoLucha from "../../Components/Images/Lucha.png"
import SolidButton from '../../Components/Utiles/Butttons'
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";
import Input from "react-validation/build/input";
import { useParams } from 'react-router-dom';

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
  const form = useRef();
  const checkBtn = useRef();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const handlePasswordChange = (e) => {
    e.preventDefault();
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {

      AuthService.updatePassword(params.id,password).then(
        (response) => {
          /*setMessage(response.data.message);
          setSuccessful(true);
          continuePostNavigationSuccessful();*/
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
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-16 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-5 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 mt-5 mb-2 lg:mt-10 lg:mb-5">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoLucha}
              alt="LogoLucha"
              />
          </div>

           <Form className="" onSubmit={handlePasswordChange} ref={form}>

            <div className="space-y-3 rounded-md mb-[-5px]">       
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
    
            <SolidButton text={"Cambiar contraseña"} color={"purpleBg"} margins={"my-6 md:my-6"} onClick={null}/>
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
    </>
  )
}