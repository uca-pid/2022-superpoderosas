import React from "react";
import "../../App.css"

const UploadProfileImage = (props) => {
  return (
    <>
    <div className="p-7 flex flex-row space-x-6">
          <div>
              <button className="grayDottedBorder lighterGreyBg rounded-xl p-4 px-6 md:p-5 md:px-8 text-2xl md:text-3xl font-Pop-M yellowBgHover greenText">+</button>
          </div>
          <div className="space-y-2 md:space-y-3">
              <div className="tracking-wide font-Pop-M font-medium text-sm uppercase blackText">Foto de Perfil</div>
              <div className="py-3 px-6 md:px-8 lg:px-10 greyBg rounded-xl tracking-widest font-Pop-M uppercase text-gray-500 hover:text-white focus:text-white text-xs md:text-sm duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white">Subir Imagen</div>
          </div>
      </div>
    </>
  );
};
export default UploadProfileImage;