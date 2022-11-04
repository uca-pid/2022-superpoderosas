import React from "react";
import ImagenNinaSonriendo from "../../Components/Images/ImagenNinaSonriendo.jpg";
import ManoConCorazon from "../../Components/Images/ManoConCorazon.png";
import InformationTooltips from "../Utiles/InformationDisplayTooltip";
import { useCurrentUser } from "../../Context/CurrentUserContext";

const UserInformationSection = () => {
  const {currentUser} = useCurrentUser();
  return (
    <>
    <div className = "flex flex-row z-10 px-10 md:px-32 basis-1/3 bg-[#F6F7F3] border border-[#E3E7DA] py-8 md:py-10 lg:py-8 mt-6 md:mt-14">
        <div className="basis-2/3 flex flex-row space-x-10 items-center ">
        <img
            className="object-cover h-32 w-32 rounded "
            src={ImagenNinaSonriendo}
            alt="ProfilePhoto"
        />
        <div className = "flex flex-col justify-center basis-8/10 flex z-10 space-y-1 md:space-y-3 lg:space-y-4 py-1">
            <div className="z-10 font-Pop-SB tracking-[0.5px] text-lg blackText">{currentUser.name} {currentUser.lastname}</div>
            <div className="z-10 font-Pop-L blackText text-sm break-normal">Me uni a pata pila en el año 2020, para conbatir la desnutrición infantil. Se que toda donación impacta en la salud física y psicologica de cada niño.</div>
        </div>
        </div> 

        <div className = "basis-1/3 justify-end flex">
        <div className="flex flex-col justify-center z-10 space-y-1 py-1">
            
            <div className="flex flex-row items-center justify-center space-x-4">
            <div className="font-Pop-R text-2xl text-center ">456</div>
            <img
                className="object-cover h-14 w-14 "
                src={ManoConCorazon}
                alt="ProfilePhoto"
            />
            </div>

            <div className="flex flex-row space-x-1">
            <div className="font-Pop-L text-sm text-start">Impacto de Vida</div>   
            <InformationTooltips.BasicInfoTooltip content="Tu Impacto de Vida representa el total que donaste, gracias a una subscripción o a donaciones de una única vez, y el total de referidos a Para Pila, gracias a haber compartido tu link."/> 
            </div>
        </div>
        </div> 
    </div> 
    </>
  );
};
export default UserInformationSection;