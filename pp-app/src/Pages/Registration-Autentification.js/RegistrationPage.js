import "../../Fonts/Poppins-Bold.ttf"
import NavBar from '../../Components/NavBars/NavBar'
import RegistrationForm from "../../Components/Forms/Registration-AutentificationForms/RegistrationForm"
import "../../App.css"
import ImagenNinaSonriendo from "../../Components/Images/ImagenNinaSonriendo.jpg"
import PictureWithText from "../../Components/Utiles/PictureWithText"
import React from 'react';

export default function RegistrationPage() {
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 image h-screen bg-cover place-content-center">
        <NavBar></NavBar>
        <RegistrationForm></RegistrationForm>
      </div>  
      <PictureWithText  picture={ImagenNinaSonriendo} title={"Unite a La Comunidad"} text={" No importa la edad que tengas, dónde vivas o cuánto podés dar. Está al alcance de tus manos ayudar a terminar con la crisis de la desnutrición infantil y podés tomar acción ahora mismo. Inicia Sesión para unirte a la Comunidad. La comunidad es un grupo de personas comprometidas y apasionadas, que donan casulamente o mes a mes para acabar con la problemática de la desnutrición infantil"}/> 
    </>
  )
}