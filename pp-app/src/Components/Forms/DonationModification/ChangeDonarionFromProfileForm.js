import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from 'react-select'
import "../../../App.css"

const ChangeDonationFromProfileForm = (props) =>{
    const [monto, setMonto] = useState("");
    const [frecuency, setFrecuency] = useState("");
    const [paymentDay, setPaymentDay] = useState("");
    const frecuencyOptions = [
        { value: '1', label: '1 vez al mes'},
        { value: '2', label: '1 vez cada 3 meses'},
        { value: '3', label: '1 vez cada 6 meses'}
      ]

    function closeForm(event) {
        props.onClose();
    }

    const onChangeMonto = (e) => {
        const monto = e.target.value;
        setMonto(monto);
    };
    const onChangeFrecuency = (e) => {
        const frecuency = e.target.value;
        setFrecuency(frecuency);
    };
    const onChangePaymentDay = (e) => {
        const paymentDay = e.target.value;
        setPaymentDay(paymentDay);
    };
 
    return(
        <Form className="p-11 blackText flex flex-col space-y-5">
            
            <div className="tracking-wide font-Pop-M font-medium uppercase blackText font-bold">Cambiar contraseña </div>

              <div className="space-y-4 rounded-md mb-[-5px] flex-rows">
                <div className="flex flex-col space-x-4">
                  <Input
                    type="text"
                    className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control"
                    name="monto"
                    value={monto}
                    placeholder="Ingrese nuevo monto"
                    onChange={onChangeMonto}
                  />   
                </div>
                <div className="flex flex-col space-x-4">   
                    <Select className="relative bg-transparent h-12 block w-full py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control" 
                        options={frecuencyOptions}
                        value={frecuency} 
                        placeholder="Seleccione la frecuencia de pago"
                        onChange={onChangeFrecuency}/>
                </div>
                <div className="flex flex-col space-x-4"> 
                  <Input
                    type="text"
                    className="relative bg-transparent h-12 block w-full rounded-xl border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control"
                    name="paymentDay"
                    value={paymentDay}
                    placeholder="Ingrese nuevo día de cobro"
                    onChange={onChangePaymentDay}
                  />
                </div>
            </div>
            <div>
                <button onClick={closeForm} className="mx-3 py-3 h-fit px-7 greyBg rounded-xl tracking-widest font-Pop-M uppercase font-medium text-gray-500 duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white text-lg">Cancelar</button>
            </div>
        </Form>
    );
}

export default ChangeDonationFromProfileForm;