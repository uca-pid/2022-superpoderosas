
import { Popover } from '@headlessui/react'
import AuthService from "../../services/auth.service";
import "../../Fonts/Poppins-Bold.ttf"
import { useNavigate } from "react-router-dom"
import React from "react";
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

  const logOut = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
              <nav className="z-50 bg-transparent container fix mx-auto z-20 top-0 left-0 px-4 mt-10 lg:mt-3 sm:px-6 lg:px-4 pt-1" aria-label="Global">
                <div className="z-50 mx-auto flex flex-row justify-start lg:mt-5">
                    <div className="justify-start flex mx-1 lg:mx-0 lg:basis-1/7">
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
                  <div className="justify-start mx-auto hidden lg:basis-4/7 lg:pr-20 lg:flex lg:flex-row mt-5">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='profileNavBarText text-lg mt-2'>
                      {item.name}
                    </a>
                  ))}
                  </div>
                  <div className="mt-3 z-50">
                  <Popover>
                    <Popover.Button className="userNavBarButton rounded-xl lg:basis-2/7 w-fit py-2 px-5">
                    <div className="justify-center flex z-50 space-x-4 overflow-hidden mx-auto lg:flex-row">
                        <img className="mt-1 h-9 w-9 rounded-full ring-2 ring-white" src={avatar} alt="avatar"></img>
                        <div className='userNameText mt-2 text-lg'>
                          {userName} {userLastName}
                        </div>
                        <div className="mt-1">
                          <FontAwesomeIcon icon="fa-solid fa-angle-down" className="arrow-down-icon pt-2" />
                        </div>
                    </div>
                    </Popover.Button>
                    <Popover.Panel className={"mt-4 p-3 rounded-2xl lightGrayBgNoHover grayBorder space-y-2"}>
                    <div className="md-round space-y-2">
                    {(props.currentUser.roles.includes('ROLE_ADMIN')) ? (
                      <>
                      {adminNavigation.map((item) => (
                        <div className='z-50 relative userNavegationText block px-1 py-2 text-[12pt] duration-300 hover:text-[13pt] focus:text-[13pt]'>
                          {item.name}
                        </div>
                        ))}
                      </>
                    ) : (
                      <>
                      {userNavigation.map((item) => (
                        <div className='z-50 relative userNavegationText block px-1 py-2 text-[12pt] duration-300 hover:text-[13pt] focus:text-[13pt]'>
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