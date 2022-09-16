import "../LogInForm/LogIn.css"
import React from "react";
import "../NavBar/navBar.css";

const SolidGreenButton = ({ text, color, margins, onClick}) => {
  return (
    <>   
            <div>
              <button
                className={`group relative flex w-full justify-center rounded-lg border border-transparent hoverYellowBg py-3 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${color} ${margins}`}
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
                className = "block w-full px-5 py-4 text-center popUpButton"
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
}
export default Buttons;
