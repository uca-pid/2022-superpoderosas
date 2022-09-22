import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import "../../Fonts/Poppins-Bold.ttf"
import { useNavigate } from "react-router-dom"
import "./navBar.css"
import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faBars);

const navigation = [
  { name: '¿Por qué desnutrición?', href: 'https://patapila.org/desnutricion.php' },
  { name: 'Nuestro Trabajo', href: 'https://patapila.org/impacto.php' },
  { name: 'Sobre Nosotros', href: 'https://patapila.org/nosotros.php' },
  { name: 'Involucrate', href: 'https://patapila.org/involucrate.php' },
]

export default function NavBar() {
  const navigate = useNavigate();
  function navigateToLogIn(){
      navigate("/login");
      window.location.reload();
    
  }
  return (
          <Popover>
              <nav className="bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-4 pt-6 sm:px-6 lg:px-8 pt-10" aria-label="Global">
                <div className="mt-8 mx-auto flex flex-row justify-around lg:mx-8">
                    <div className="flex flex-row justify-between w-full mx-3 lg:mx-0 lg:basis-2/5">
                        <div className=''>
                            <a href="https://patapila.org/index.php">
                            <img
                                className="mt-0 md:mt-2 h-auto w-[260px]"
                                src="https://patapila.org/assets/img/logo_3.svg"
                                alt="Pata Pila Logo"
                            />
                            </a>
                        </div>
                        <div className="mt-5 flex items-center block mobile-nav-toggle lg:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-500">
                                <FontAwesomeIcon icon="fa-bars" className="h-10 w-10 mobile-nav-toggle" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                    </div>
                  <div className="justify-end mx-auto flex-1 hidden lg:basis-3/5 lg:pr-4 lg:pt-8 lg:flex lg:flex-row">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='font-Pop-B uppercase text-white font-bold duration-[0.3s] ml-[5px] text-[17px] tracking-[0.5px] px-[28px] inline-block py-[10px]  position-relative-nowrap mt-2 yellowTextHover'>
                      {item.name}
                    </a>
                  ))}
                    <button onClick={navigateToLogIn} className = {"font-Pop-M uppercase text-white text-[17px] px-[40px] py-[12px] position-relative-nowrap font-bold duration-[0.3s] tracking-[0.5px] ml-[5px] inline-block mt-1 bg-white greenText rounded-lg font-semibold hover:bg-transparent whiteBorder hover:text-white  focus:bg-transparent focus:text-white"}>Iniciar Sesión</button>
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
                className="darkGreyBg absolute h-full top-0 inset-x-0 z-10 origin-top-right transform p-2 transition lg:hidden"
              >
                
                <div className="px-5 pt-4 justify-self-end grid ">
                    <Popover.Button className="rounded-md p-2 text-white place-self-end" >
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                </div>
                  
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 px-2 pt-2 z-50">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="z-50 block rounded-md px-3 py-4 text-base font-Pop-B uppercase blackText font-bold text-[17px] tracking-[0.5px] grayBottomBorder"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                    <button className="z-50 block rounded-md px-5 py-5 text-base font-Pop-B uppercase font-bold text-[17px] tracking-[0.5px] yellowBg text-white w-full greenBgHover" onClick={navigateToLogIn}>Iniciar Sesión</button> 
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

  )
}