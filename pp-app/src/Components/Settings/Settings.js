import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import '../../Pages/Profile Page/profile.css'
import ChangePasswordFromProfileForm from "./ChangePasswordFromProfileForm";

const Settings = () => {
  const [requestToChangePassword, setRequestToChangePassword] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  const userData = [{title: "Nombre", information: currentUser.name+' '+currentUser.lastname},{title:"Email", information:currentUser.email}];
  const onOpenChangePasswordForm = () => setRequestToChangePassword(true);
  const onCloseChangePasswordForm = () => setRequestToChangePassword(false);

  return (
    <>
    <div className="static z-10 flex flex-col space-y-10 min-w-screen pb-10">
        <div className = "z-10 px-10 md:px-20 lg:px-80 basis-1/3 grayBg grayBorder space-y-2 md:space-y-3 lg:space-y-4 py-8 md:py-10 lg:py-16 mt-20">
            <div className="z-10 boldSubtitle text-[26px] md:text-[30px] lg:text-[32px] blackText">Bievenida {currentUser.name}!</div>
            <div className="z-10 descriptionText blackText text-[18px] md:text-[20px] lg:text-[22px]">Gracias por ser parte de nuestra comunidad</div>
        </div>   
        <div className = " px-5 md:px-20 lg:px-80 lg:basis-2/3 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0">
            <div className="lg:basis-1/2 grayBorder rounded-lg flex flex-col">
                <div className="grayBg grayBottomBorder p-7 blackText poppinsMedium uppercase text-lg md:text-xl tracking-wider font-medium">Perfil de Usuario</div>
                <div className="p-7 flex flex-row space-x-10">
                    <div>
                        <button className="grayDottedBorder lightGrayBg rounded-xl p-8 px-11 text-3xl poppinsMedium buttonTextColor">+</button>
                    </div>
                    <div className="space-y-3">
                        <div className="tracking-wide poppinsMediumWithWeight text-[16px] md:text-[19px] lg:text-[19px] uppercase blackText">Foto de Perfil</div>
                        <div className="py-3 px-6 md:px-8 lg:px-10 grayBg rounded-xl tracking-widest poppinsMedium uppercase font-medium text-gray-500 hover:text-white focus:text-white text-[15px] md:text-lg lg:text-lg duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white">Subir Imagen</div>
                    </div>
                </div>
                <div className="p-7 space-y-5 md:space-y-6 lg:space-y-10 ">
                {userData.map((data) => {
                    return (
                        <div className="blackText flex flex-col space-y-2 lg:space-y-3">
                            <div className="tracking-wide poppinsMediumWithWeight uppercase blackText font-bold">{data.title}</div>
                            <div className="poppinsRegular text-lg md:text-xl">{data.information}</div>
                        </div>
                );})} 
                </div>
            </div>
            <div className="lg:basis-1/2 grayBorder rounded-lg h-fit lg:mb-0">
                <div className="grayBg grayBottomBorder p-7 blackText poppinsMedium uppercase text-lg md:text-xl tracking-wider font-medium">Modificar Cuenta</div>
                    {!requestToChangePassword ? (
                        <div className="p-11 blackText flex flex-rows justify-between">
                            <div className="poppinsRegular text-lg md:text-xl blackText">Contraseña</div>
                            <button onClick={onOpenChangePasswordForm} className="poppinsRegular font-semibold buttonTextColor uppercase text-base text-end md:text-lg">Modificar Contraseña</button>
                        </div>
                    ): (
                        <>
                            <ChangePasswordFromProfileForm onClose={onCloseChangePasswordForm}></ChangePasswordFromProfileForm>
                        </>
                    )}
            </div>    
        </div> 
    </div>  
    </>
  );
};
export default Settings;