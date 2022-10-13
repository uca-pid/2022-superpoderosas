import React, { useState } from "react";
import "../../App.css"
import AuthService from "../../services/auth.service";
import ChangePasswordFromProfileForm from "../Forms/PasswordModificationForms/PasswordModificationsViaSettings/ChangePasswordFromProfileForm";
import ChangeDonationFromProfileForm from "../Forms/DonationModification/ChangeDonarionFromProfileForm";
import { SubModContextProvider} from "../../Context/SubscriptionModificationContext";
import { useCurrentUser } from "../../Context/CurrentUserContext";
import ModifyStatePopUp from "../Forms/DonationModification/ModifyStatePopUp";
import { AmountContextProvider } from  '../../Context/AmountContext'
import { FrequencyContextProvider } from "../../Context/FrequencyContext";
import { SubscriptionContextProvider } from "../../Context/SubscriptionContext";

const Settings = () => {
  const [requestToChangePassword, setRequestToChangePassword] = useState(false);
  const [setRequestToChangeDonation] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  const userData = [{title: "Nombre", information: currentUser.name+' '+currentUser.lastname},{title:"Email", information:currentUser.email}];
  const onOpenChangePasswordForm = () => setRequestToChangePassword(true);
  const onCloseChangePasswordForm = () => setRequestToChangePassword(false);
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
        <div className = "z-10 px-10 md:px-20 lg:px-80 basis-1/3 greyBg space-y-2 md:space-y-3 lg:space-y-4 py-8 md:py-4 lg:py-4 mt-20">
        </div> 
        }
        

        <div className = " px-5 md:px-20 lg:px-80 lg:basis-2/3 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0">
            <div className="lg:basis-1/2 darkGrayBorder rounded-lg flex flex-col">
                <div className="greyBg darkGrayBottomBorder p-7 blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">Perfil de Usuario</div>
                <div className="p-7 flex flex-row space-x-10">
                    <div>
                        <button className="grayDottedBorder lighterGreyBg rounded-xl p-8 px-11 text-3xl font-Pop-M yellowBgHover greenText">+</button>
                    </div>
                    <div className="space-y-3">
                        <div className="tracking-wide font-Pop-M font-medium  text-[16px] md:text-[19px] lg:text-[19px] uppercase blackText">Foto de Perfil</div>
                        <div className="py-3 px-6 md:px-8 lg:px-10 greyBg rounded-xl tracking-widest font-Pop-M uppercase font-medium text-gray-500 hover:text-white focus:text-white text-[15px] md:text-lg lg:text-lg duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white">Subir Imagen</div>
                    </div>
                </div>
                <div className="p-7 space-y-5 md:space-y-6 lg:space-y-10 ">
                {userData.map((data) => {
                    return (
                        <div key={data.title} className="blackText flex flex-col space-y-2 lg:space-y-3">
                            <div className="tracking-wide font-Pop-M font-medium  uppercase blackText font-bold">{data.title}</div>
                            <div className="font-Pop-R text-lg md:text-xl">{data.information}</div>
                        </div>
                );})} 
                </div>
            </div>
            <div className="lg:basis-1/2  flex flex-col space-y-10">
                <div className="darkGrayBorder rounded-lg h-fit">
                    <div className="greyBg darkGrayBottomBorder p-7 blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">Modificar Cuenta</div>
                        {!requestToChangePassword ? (
                            <div className="p-11 blackText flex flex-row space-x-2 justify-between">
                                <div className="font-Pop-R text-lg md:text-xl blackText">Contraseña</div>
                                <button onClick={onOpenChangePasswordForm} className="font-Pop-R font-semibold yellowTextHover greenText uppercase text-base text-end md:text-lg">Modificar Contraseña</button>
                            </div>
                        ): (
                            <>
                                <ChangePasswordFromProfileForm onClose={onCloseChangePasswordForm}></ChangePasswordFromProfileForm>
                            </>
                        )}
                </div> 
                {subscriptionData ?
                <div className="lg:basis-1/2 darkGrayBorder rounded-lg h-fit lg:mb-0">           
                    <SubscriptionContextProvider>
                    <FrequencyContextProvider>
                    <SubModContextProvider>
                    <AmountContextProvider>
                    <div className="greyBg flex flex-row justify-around darkGrayBottomBorder py-7 px-2 blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">
                        <div>
                        Modificar donación periódica
                        </div>
                        <ModifyStatePopUp></ModifyStatePopUp>              
                    </div>
                    <ChangeDonationFromProfileForm onClose={onCloseChangeDonationForm}></ChangeDonationFromProfileForm>
                    </AmountContextProvider>
                    </SubModContextProvider>  
                    </FrequencyContextProvider>  
                    </SubscriptionContextProvider>
                </div> 
                : null
                }  
            </div> 
        </div> 
    </div>  
    </>
  );
};
export default Settings;