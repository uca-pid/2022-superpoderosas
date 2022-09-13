import "../LogInForm/LogIn.css"
import React, { useRef } from "react";

const SolidButton = ({ text, color, margins}) => {
  return (
    <>   
            <div>
              <button
                className={`group relative flex w-full justify-center rounded-lg border border-transparent hoverYellowBg py-3 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${color} ${margins}`}
              >
                {text}
              </button >
            </div>
    </>
  )
}


export default SolidButton;