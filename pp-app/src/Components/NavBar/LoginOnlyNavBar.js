import "../../Fonts/Poppins-Bold.ttf"
import "./navBar.css"
import "../../Pages/ChangePassword Page/ChangePasswordPage.css"
import "../../App.css"
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Popover} from '@headlessui/react';
import Buttons from "../Utiles/Butttons"

export default function LoginOnlyNavBar() {

  const navigate = useNavigate();

  function navigateToLogIn(){
      navigate("/login");
      window.location.reload();
    
  }

  return (
    <>
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
            <Buttons.SolidWhiteButton onClick={navigateToLogIn} text={"Log In"}/> 
        </div>
    </div>
    </nav>
    </Popover> 
   </>
  )
}