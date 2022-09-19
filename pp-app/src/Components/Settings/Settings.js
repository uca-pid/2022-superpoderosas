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
    <div className="flex flex-col space-y-10 min-w-screen">
        <div className = "px-80 basis-1/3 grayBg grayBorder space-y-4 py-16">
            <div className="boldSubtitle blackText">Bievenida {currentUser.name}!</div>
            <div className="descriptionText blackText">Gracias por ser parte de nuestra comunidad</div>
        </div>   
        <div className = "px-80 basis-2/3 flex flex-col md:flex-row w-full space-x-0 md:space-x-10 space-y-10 md:space-y-0">
            <div className="basis-1/2 grayBorder rounded-lg flex flex-col">
                <div className="grayBg grayBottomBorder p-7 blackText poppinsMedium uppercase text-xl tracking-wider font-medium">Perfil de Usuario</div>
                <div className="p-7 flex flex-row space-x-10">
                    <div>
                        <button className="grayDottedBorder lightGrayBg rounded-xl p-8 px-11 text-3xl poppinsMedium buttonTextColor">+</button>
                    </div>
                    <div className="space-y-3">
                        <div className="tracking-wide poppinsMediumWithWeight uppercase blackText">Foto de Perfil</div>
                        <div className="py-3 px-10 grayBg rounded-xl tracking-widest poppinsMedium uppercase font-medium text-gray-500 hover:text-white focus:text-white text-lg  duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white">Subir Imagen</div>
                    </div>
                </div>
                {userData.map((data) => {
                    return (
                        <div className="p-7 blackText flex flex-col space-y-3">
                            <div className="tracking-wide poppinsMediumWithWeight uppercase blackText font-bold">{data.title}</div>
                            <div className="poppinsRegular text-xl">{data.information}</div>
                        </div>
                );})} 
            </div>
            <div className="basis-1/2 grayBorder rounded-lg h-fit">
                <div className="grayBg grayBottomBorder p-7 blackText poppinsMedium uppercase text-xl tracking-wider font-medium">Modificar Cuenta</div>
                    {!requestToChangePassword ? (
                        <div className="p-11 blackText flex flex-rows justify-between">
                            <div className="poppinsRegular text-xl blackText">Contraseña</div>
                            <button onClick={onOpenChangePasswordForm} className="poppinsRegular font-semibold buttonTextColor uppercase text-lg">Modificar Contraseña</button>
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