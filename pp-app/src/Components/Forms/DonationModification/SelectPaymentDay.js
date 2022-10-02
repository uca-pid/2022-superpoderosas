import React from "react"
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSubModContext } from "../../../Context/SubscriptionModificationContext"

const SelectPaymentDay = ( ) => {
  const { subsPeriod, paymentDay, setPaymentDay} = useSubscriptionPeriod()
  const {userWantsToModifySubs} = useSubModContext()
  //EL VALOR POR DEFAULT DEBERÍA DE VENIR DEL BACKEND
    return (
      <div className="space-y-4">
      <div className="font-Pop-R text-lg text-gray-400">
        {userWantsToModifySubs ? 
        ((subsPeriod.value === "1") ?
        "¿Qué día del mes quiere que se realize el pago?"
        :"¿Qué día quiere donar?")
      : "Fecha del Próximo Pago"
      }
      </div>
      <div className="flex flex-row">
            <div className="basis-1/2"> 
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      disabled = {!userWantsToModifySubs}
                      disablePast
                      inputFormat="MM/DD/YYYY"
                      value={paymentDay}
                      onChange={(newPaymentDay) => {
                        setPaymentDay(newPaymentDay)
                      }}
                      renderInput={(params) => 
                      <TextField {...params} className="text-3xl"
                        sx={{
                           '.MuiInputBase-input': {
                            padding: 2,
                            marginLeft: 1,
                            fontFamily: "Poppins-Medium",
                            color: "#6c3333", 
                            fontSize: "1.125rem",
                            letterSpacing: 0.5,
                        },
                        }}
                      />}
                      views = {["day"]}
                      showDaysOutsideCurrentMonth
                     
                      />
                  </LocalizationProvider>
                </div>
            </div>
      </div>
    )
  }
  
  export default SelectPaymentDay