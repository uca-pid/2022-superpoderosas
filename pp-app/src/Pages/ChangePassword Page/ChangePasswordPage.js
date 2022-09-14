import "../../Fonts/Poppins-Bold.ttf"
import "../../Components/NavBar/navBar.css"
import "./ChangePasswordPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VerifyEmailForm from "../../Components/ChangePasswordForms/VerifyEmailForm"
import "../../App.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Popover} from '@headlessui/react';

export default function ChangePasswordPage() {

  const navigate = useNavigate();

  const [userSentEmail, setIfUserSentEmail] = useState(false);

  function navigateToLogIn(){
      navigate("/login");
      window.location.reload();
    
  }

  return (
    <>
    <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 greenBg bg-cover h-screen bg-cover place-content-center">
              <Popover>
              <nav className="bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-4 pt-6  sm:px-6 lg:px-8 pt-10" aria-label="Global">
                <div className="mt-8 mx-auto flex flex-row justify-around lg:mx-8">
                    <div className="flex flex-row justify-between w-full mx-3 lg:mx-0 lg:basis-2/5">
                        <div className=''>
                            <a href="https://patapila.org/index.php">
                            <img
                                className="sm:h-10 navBarLogo"
                                src="https://patapila.org/assets/img/logo_3.svg"
                                alt="Pata Pila Logo"
                            />
                            </a>
                        </div>
                    </div>
                  <div className="justify-end mx-auto flex-1  lg:basis-3/5 lg:pr-4 lg:pt-8 lg:flex lg:flex-row">
                    <button onClick={navigateToLogIn} className = {"navBarLoginTextButton navBarLoginButtonBorder mt-1"}>Log In</button>
                  </div>
                </div>
              </nav>
              </Popover>
         
          <VerifyEmailForm></VerifyEmailForm>
      </div>  
   </>
  )
}