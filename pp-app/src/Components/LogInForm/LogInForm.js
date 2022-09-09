import "./LogIn.css"
import LogoCorazon from "../Images/LogoCorazon.png"
import SeparationLine from '../Utiles/SeparationLine'
import SolidButton from '../Utiles/Butttons'
import ClassicInput from '../Utiles/Inputs'

export default function LogIn(props) {
  function openRegistration(event) {
    props.onChange(event.target.userWantsToRegister);
  }
  return (
    <>
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-20 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 my-5 lg:my-10">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoCorazon}
              alt="LogoCorazon"
              />
          </div>

          <form className="" action="#" method="POST">

            <div className="-space-y-px rounded-md shadow-sm">       
              <ClassicInput htmlFor={"email-address"} placeholder={"Email"} id={"email"} autoComplete={"email"}/>
              <ClassicInput htmlFor={"password"} placeholder={"Contraseña"} id={"password"} autoComplete={"current-password"}/>
            </div>
    
            <SolidButton text={"Iniciar Sesión"} color={"greenBg"} margins={"my-5 md:my-8"}/>

            <div className="grid justify-items-center">
                <a href="#" className="yellowTextHover purpleText placeholderText font-semibold">
                  ¿Olvidaste tu contraseña?
                </a>
            </div> 

            <SeparationLine text={"O"} margins="mt-4"/>
            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[13pt]">
                  ¿No tienes una cuenta?
                </div>
                <button className="ml-3 greenText yellowTextHover relevantText text-[13pt] font-semibold" onClick={openRegistration}>
                  Regístrate
                </button>
            </div> 
            
          </form>
        </div>
      </div>
    </>
  )
}