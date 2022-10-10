
import { Popover } from '@headlessui/react'
import AuthService from "../../services/auth.service";
import "../../Fonts/Poppins-Bold.ttf"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import "./profileNavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from "../Utiles/Butttons";
import LogoPataPila_Colores from "../Images/LogoPataPila_Colores.jpg";
import avatar from "../Images/avatar.jpeg";

const navigation = [
  { name: '¿Por qué desnutrición?', href: 'https://patapila.org/desnutricion.php' },
  { name: 'Nuestro Trabajo', href: 'https://patapila.org/impacto.php' },
  { name: 'Sobre Nosotros', href: 'https://patapila.org/nosotros.php' },
  { name: 'Involucrate', href: 'https://patapila.org/involucrate.php' },
]

const userNavigation =[
    { name: 'Mi Cuenta' },
    { name: 'Mi Impacto'},
]

const adminNavigation =[
  { name: 'Reportes' },
  { name: 'Transacciones'},
]

export default function ProfileNavBar(props) {
  const navigate = useNavigate();
  const userName = props.currentUser.name;
  const userLastName = props.currentUser.lastname;

  function navigateToLogIn(){
      navigate("/login");
      window.location.reload();
    
  }
  const logOut = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
              <nav className="z-50 bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-4 sm:px-6 lg:px-8 pt-1" aria-label="Global">
                <div className="z-50 mx-auto flex flex-row justify-start lg:mt-5">
                    <div className="justify-start flex mx-1 lg:mx-0 lg:basis-1/7 mt-1">
                        <div className=''>
                            <a href="https://patapila.org/index.php">
                            <img
                                className="sm:h-9 profileNavBarLogo"
                                alt="LogoPataPila_Colores"
                                src={LogoPataPila_Colores}
                            />
                            </a>
                        </div>
                    </div>
                  <div className="justify-start mx-auto hidden lg:basis-5/7 lg:pr-20 lg:flex lg:flex-row mt-5">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='profileNavBarText mt-2'>
                      {item.name}
                    </a>
                  ))}
                  </div>
                  <div className="mt-3 z-50">
                  <Popover>
                    <Popover.Button className="userNavBarButton rounded-md place-self-end">
                    <div className="z-50 ml-5 flex justify-end lg:basis-1/7 -space-x-2 overflow-hidden mt-3 mb-3 mx-auto flex-1 lg:flex lg:flex-row lg:mr-10">
                        <img className="flex inline-block h-9 w-9 rounded-full ring-2 ring-white" src={avatar} alt="avatar"></img>
                        <div className='flex pl-5 userNameText mt-2 '>
                        {userName} {userLastName}
                        </div>
                        <div className="pl-5 justify-end inline-block pt-2">
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" className="arrow-down-icon" />
                        </div>
                    </div>
                    </Popover.Button>
                    <Popover.Panel>
                    <div className="pt-2 md-round">
                    {(props.currentUser.roles.includes('ROLE_ADMIN')) ? (
                      <>
                      {adminNavigation.map((item) => (
                        <div className='z-50 relative userNavegationText block px-1 py-2 text-base'>
                          {item.name}
                        </div>
                        ))}
                      </>
                    ) : (
                      <>
                      {userNavigation.map((item) => (
                        <div className='z-50 relative userNavegationText block px-1 py-2 text-base'>
                          {item.name}
                        </div>
                        ))}
                        </>
                    )}
                    </div>
                  <Buttons.ProfileNavBarButton onClick={logOut} text={"Cerrar Sesión"}/> 
                    </Popover.Panel>
                    </Popover>
                    </div>
                </div>
              </nav>
          </>
  )
}