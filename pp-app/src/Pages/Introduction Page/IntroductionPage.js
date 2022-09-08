import "../../Fonts/Poppins-Bold.ttf"
import "../../Components/NavBar/navBar.css"
import "./IntroductionPage.css"
import NavBar from '../../Components/NavBar/NavBar'
import LogInForm from "../../Components/LogInForm/LogInForm"
import "../../App.css"
import ImagenNinaSonriendo from "../../Components/Images/ImagenNinaSonriendo.jpg"

export default function IntroductionPage() {
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 image h-screen bg-cover place-content-center">
        <NavBar></NavBar>
        <LogInForm></LogInForm> 
      </div>  
      <div className="greenBg py-5 md:py-20 lg:px-20 flex space-y-2 flex-col lg:flex-row ">  
        <div class="grid justify-items-center basis-1/2 ml-40">
          <img
                className="object-scale-down h-80 w-auto"
                src={ImagenNinaSonriendo}
                alt="ImagenNinaSonriendo"
          />
        </div>
        <div className="basis-1/2 uneteTitle mx-40">
          <div className="mt-5">
            Unite a La Comunidad
          </div>
          <div className="uneteText mt-8 text-justify">
            No importa la edad que tengas, dónde vivas o cuánto podés dar. Está al alcance de tus manos ayudar a terminar con la crisis de la desnutrición infantil y podés tomar acción ahora mismo. Inicia Sesión para unirte a la Comunidad. La comunidad es un grupo de personas comprometidas y apasionadas, que donan casulamente o mes a mes para acabar con la problemática de la desnutrición infantil
          </div>
        </div>
      </div>
    </>
  )
}