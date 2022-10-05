import { useNavigate } from "react-router-dom"
import React from "react";

const ModifyDonation = () => {

  const navigate = useNavigate();

  const modifyDonationInSettings = () => {
    navigate("/profile");
  };

  return (
    <>
      <button onClick={modifyDonationInSettings}
        className="rounded-xl p-4 h-auto w-full text-center greenBg yellowBgHover font-Pop-SB text-xl md:text-2xl text-white">
        Ir a Ajustes
      </button>
    </>
  )
}

export default ModifyDonation;