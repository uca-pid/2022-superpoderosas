import React, { useState } from "react";
import "../../App.css"
import AuthService from "../../services/auth.service";
import ChangeDonationFromProfileForm from "../Forms/DonationModification/ChangeDonarionFromProfileForm";
import { SubModContextProvider} from "../../Context/SubscriptionModificationContext";
import { useCurrentUser } from "../../Context/CurrentUserContext";
import ModifyStatePopUp from "../Forms/DonationModification/ModifyStatePopUp";
import { AmountContextProvider } from  '../../Context/AmountContext'
import { FrequencyContextProvider } from "../../Context/FrequencyContext";
import { SubscriptionContextProvider } from "../../Context/SubscriptionContext";
import Card from "../Utiles/Card";
import InformationColumn from "./InformationColumn";
import UploadProfileImage from "./UploadProfileImage";
import ChangePasswordOptionSection from "./ChangePasswordOptionSection";

const Settings = () => {
  const [setRequestToChangeDonation] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  const userData = [{title: "Nombre", information: currentUser.name+' '+currentUser.lastname},{title:"Email", information:currentUser.email}];
  const onCloseChangeDonationForm = () => setRequestToChangeDonation(false);
  const {subscriptionData} = useCurrentUser()
  const isAdmin = () => {
    return JSON.stringify((AuthService.getCurrentUser()).roles) === JSON.stringify(["ROLE_ADMIN"]);
  };

  return (
    <>
    <div className="static z-10 flex flex-col space-y-10 min-w-screen pb-10">
        {(!isAdmin) ? 
        <div className = "z-10 px-10 md:px-20 lg:px-80 basis-1/3 greyBg darkGrayBorder space-y-2 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-16 mt-20">
            <div className="z-10 font-Pop-SB tracking-[0.8px] text-[26px] md:text-[30px] lg:text-[32px] blackText">Bienvenida {currentUser.name}!</div>
            <div className="z-10 font-Pop-L blackText text-[18px] md:text-[20px] lg:text-[22px]">Gracias por ser parte de nuestra comunidad</div>
        </div>  
        :
        <div className = "z-10 px-10 md:px-20 basis-1/3 greyBg darkGrayBorder space-y-1 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-8 mt-6 md:mt-14">
            <div className="z-10 font-Pop-SB tracking-[0.8px] text-lg md:text-xl blackText">AJUSTES</div>
            <div className="z-10 font-Pop-L blackText text-sm md:text-base">Edita tu perfil o modifica tu subscripción</div>
        </div>  
        }
        

        <div className = "px-10 md:px-20 lg:basis-3/4 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0">
            <Card 
            width="lg:basis-1/2"
            title="Perfil de Usuario"
            content={
                <>
                <UploadProfileImage/>
                <InformationColumn information={userData}/>
                </>
            }
            />
            <div className="lg:basis-1/2  flex flex-col space-y-10">
                <Card
                width=""
                title="Cambiar Contraseña"
                content={
                    <ChangePasswordOptionSection></ChangePasswordOptionSection>
                }
                />
            {subscriptionData ?
            <SubscriptionContextProvider>
            <FrequencyContextProvider>
            <SubModContextProvider>
            <AmountContextProvider>
             <Card 
                width=""
                title="Modificar Subscripción" 
                content={<ChangeDonationFromProfileForm onClose={onCloseChangeDonationForm}/>}
                popup={<ModifyStatePopUp></ModifyStatePopUp> }
                /> 
            </AmountContextProvider>
            </SubModContextProvider>  
            </FrequencyContextProvider>  
            </SubscriptionContextProvider>
            : null
            }  
            </div> 
        </div> 
    </div>  
    </>
  );
};
export default Settings;