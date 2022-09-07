import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LoginButton from '../Registration Buttons/loginButton'
import "../../Fonts/Poppins-Bold.ttf"
import "./navBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navIcon } from '@fortawesome/fontawesome-free-solid'


const navigation = [


  { name: '¿Por qué desnutrición?', href: 'https://patapila.org/desnutricion.php' },
  { name: 'Nuestro Trabajo', href: 'https://patapila.org/impacto.php' },
  { name: 'Sobre Nosotros', href: 'https://patapila.org/nosotros.php' },
  { name: 'Involucrate', href: 'https://patapila.org/involucrate.php' },
]

export default function NavBar() {
  return (
          <Popover>
              <nav className="bg-transparent container sm:h-10 fix mx-auto z-20 top-0 left-0 px-4 pt-6 sm:px-6 lg:px-8 pt-10" aria-label="Global">
                <div className="mt-8 mx-auto flex flex-row justify-around md:mx-8">
                    <div className="flex flex-row justify-between w-full mx-3 md:mx-0 md:basis-2/5">
                        <div className=''>
                            <a href="https://patapila.org/index.php">
                            <img
                                className="sm:h-10 navBarLogo"
                                src="https://patapila.org/assets/img/logo_3.svg"
                                alt="Pata Pila Logo"
                            />
                            </a>
                        </div>
                        <div className="mt-5 flex items-center block mobile-nav-toggle md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-500">
                                <FontAwesomeIcon icon="fa-bars" className="h-10 w-10 mobile-nav-toggle" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                    </div>
                  <div className="justify-end mx-auto flex-1 hidden md:basis-3/5 md:pr-4 md:pt-8 md:flex mf:flex-row">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='navBarText mt-2'>
                      {item.name}
                    </a>
                  ))}
                    <LoginButton style = {"navBarTextButton navBarButtonBorder mt-1"}></LoginButton>
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
                className="absolute inset-x-0 top-5 z-10 origin-top-right transform p-2 transition md:hidden drop-shadow-[35px_35px_20px_rgba(0,0,0,0.4)]"
              >
                
                <div className="px-5 pt-4 justify-self-end grid ">
                    <Popover.Button className="rounded-md p-2 text-white place-self-end">
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                </div>
                  
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                    <LoginButton style = {"block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"}></LoginButton>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

  )
}