import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import "../../Fonts/Poppins-Bold.ttf"
import { useNavigate } from "react-router-dom"
import "./profileNavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from "../Utiles/Butttons";
import LogoPataPila_Colores from "../Images/LogoPataPila_Colores.jpg";

const navigation = [
  { name: '¿Por qué desnutrición?', href: 'https://patapila.org/desnutricion.php' },
  { name: 'Nuestro Trabajo', href: 'https://patapila.org/impacto.php' },
  { name: 'Sobre Nosotros', href: 'https://patapila.org/nosotros.php' },
  { name: 'Involucrate', href: 'https://patapila.org/involucrate.php' },
]

export default function ProfileNavBar() {
  const navigate = useNavigate();
  function navigateToLogIn(){
      navigate("/login");
      window.location.reload();
    
  }
  return (
    <>
          <Popover>
              <nav className="bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-4 sm:px-6 lg:px-8 pt-1" aria-label="Global">
                <div className="mt-8 mx-auto flex flex-row justify-start lg:mx-8">
                    <div className="flex flex-row justify-start w-full mx-3 lg:mx-0 lg:basis-1/7">
                        <div className=''>
                            <a href="https://patapila.org/index.php">
                            <img
                                className="sm:h-9 navBarLogo"
                                alt="LogoPataPila_Colores"
                                src={LogoPataPila_Colores}
                            />
                            </a>
                        </div>
                        <div className="mt-5 flex items-center block mobile-nav-toggle lg:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-500">
                                <FontAwesomeIcon icon="fa-bars" className="h-10 w-10 mobile-nav-toggle" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                    </div>
                  <div className="justify-start mx-auto flex-1 hidden lg:basis-5/7 lg:pr-16 lg:flex lg:flex-row">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='navBarText mt-2'>
                      {item.name}
                    </a>
                  ))}
                  </div>
                </div>
              </nav>
           

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="backdrop absolute h-full top-0 inset-x-0 z-10 origin-top-right transform p-2 transition lg:hidden"
              >
                
                <div className="px-5 pt-4 justify-self-end grid ">
                    <Popover.Button className="rounded-md p-2 text-white place-self-end">
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                </div>
                  
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 px-2 pt-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-4 text-base popUpText"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                    <Buttons.SolidWhiteButton onClick={navigateToLogIn} text={"LIniciar Sesión"}/> 
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="flex justify-end lg:basis-1/7 -space-x-2 overflow-hidden">
           <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
          </div>
          </>
  )
}