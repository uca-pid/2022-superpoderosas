import React from "react";
import "../../../App.css"

const ChangeDonationFromProfileForm = (props) =>{

    function closeForm(event) {
        props.onClose();
    }
 
    return(
        <div>
            <button onClick={closeForm} className="mx-3 py-3 h-fit px-7 greyBg rounded-xl tracking-widest font-Pop-M uppercase font-medium text-gray-500 duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white text-lg">Cancelar</button>
        </div>
    );
}

export default ChangeDonationFromProfileForm;