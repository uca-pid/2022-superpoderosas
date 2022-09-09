import "./LogIn.css"
import LogoLucha from "../Images/Lucha.png"
import SeparationLine from '../Utiles/SeparationLine'
import SolidButton from '../Utiles/Butttons'
import ClassicInput from '../Utiles/Inputs'

export default function RegistrationForm(props) {
  function openLogIn(event) {
    props.onChange(event.target.userWantsToRegister);
  }
  return (
    <>
      <div className="min-h-full md:items-center justify-items-center grid px-4 sm:px-6 pt-10 lg:px-8 mt-3 lg:mt-20 lg:justify-items-end">
        <div className="grid content-center w-full rounded-3xl max-w-md space-y-2 bg-white bg-opacity-90 lg:mx-60 drop-shadow-2xl p-8 md:p-16 h-4/5 md:h-2/3 lg:h-4/5 mt-5 mb-2 lg:mt-10 lg:mb-5">
          <div className="">
              <img
              className="mx-auto h-40 w-auto"
              src={LogoLucha}
              alt="LogoLucha"
              />
          </div>

          <form className="" action="#" method="POST">

            <div className="-space-y-px rounded-md shadow-sm mb-[-5px]">       
              <ClassicInput htmlFor={"email-address"} placeholder={"Email"} id={"email"} autoComplete={"email"}/>
              <ClassicInput htmlFor={"username"} placeholder={"Nombre de usuario"} id={"username"} autoComplete={"username"}/>
              <ClassicInput htmlFor={"password"} placeholder={"Contraseña"} id={"password"} autoComplete={"current-password"}/>
            </div>
    
            <SolidButton text={"Registrarte"} color={"purpleBg"} margins={"my-2 md:my-6"}/>

            <SeparationLine text={"O"} margins="mt-2"/>

            <div className="flex flex-rows justify-center mt-5 mb-4">
                <div className="gray-300 relevantText text-[12pt]">
                  ¿Ya tienes una cuenta?
                </div>
                <button className="ml-2 greenText yellowTextHover relevantText text-[12.5pt] font-semibold" onClick={openLogIn}>
                  Iniciar Sesión
                </button>
            </div> 

            
          </form>
        </div>
      </div>
    </>
  )
}