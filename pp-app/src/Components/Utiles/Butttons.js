import "../Forms/Registration-AutentificationForms/LogIn.css"
import React from "react";
import "../NavBars/navBar.css";
import "../../App.css"

const SolidGreenButton = ({ text, color, margins, onClick}) => {
  return (
    <>   
            <div>
              <button
                className={`group font-Pop-M relative flex w-full justify-center rounded-lg border border-transparent yellowBgHover py-3 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${color} ${margins}`}
                onClick = {onClick}
              >
                {text}
              </button >
            </div>
    </>
  )
}

const SolidWhiteButton = ({ text, onClick}) => {
  return (
    <>   
            <div>
              <button
                className = "font-Pop-B uppercase duration-[0.3s] text-[16px] position-relative-nowrap px-[40px] py-[12px] ml-[5px] tracking-[0.5px] inline-block greenText bg-white rounded-lg yellowBgHover focus:text-white hover:text-white "
                onClick = {onClick}
              >
                {text}
              </button >
            </div>
    </>
  )
}

const ProfileNavBarButton = ({ text, onClick}) => {
    return (
      <>   
              <div>
                <button
                  className = "block w-full px-1 py-2 text-left greenText uppercase font-Pop-M tracking-[0.5px] text-[12pt] duration-300 hover:text-[13pt] focus:text-[13pt]"
                  onClick = {onClick}
                >
                  {text}
                </button >
              </div>
      </> 
  )
}

const Buttons = {
  SolidGreenButton,
  SolidWhiteButton,
  ProfileNavBarButton
}
export default Buttons;
