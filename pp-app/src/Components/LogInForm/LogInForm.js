import { LockClosedIcon } from '@heroicons/react/20/solid'
import "./LogIn.css"
import LogoCorazon from "../Images/LogoCorazon.png"
import SeparationLine from '../Utiles/SeparationLine'

export default function LogIn() {
  return (
    <>
      <div className="min-h-full items-center justify-items-center grid py-10 px-4 sm:px-6 lg:px-8 mt-20 lg:justify-items-end">
        <div className="grid content-center w-full p-16 rounded-3xl max-w-md space-y-8 bg-white bg-opacity-90 h-4/5 my-10 lg:mx-60 drop-shadow-2xl">
            <div className="mt-4">
                <img
                className="mx-auto h-40 w-auto"
                src={LogoCorazon}
                alt="LogoCorazon"
                />
            </div>
          <form className="" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative bg-transparent h-12 block w-full rounded-xl  mb-4 border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg border border-transparent greenBg hoverYellowBg py-3 my-8 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Iniciar Sesión
              </button>
            </div>

            <div className="grid justify-items-center">
                <a href="#" className="babyPinkTextHover purpleText placeholderText font-semibold">
                  Olvidaste tu contraseña?
                </a>
            </div> 

            <SeparationLine text={"O"}/>
            
          </form>
        </div>
      </div>
    </>
  )
}