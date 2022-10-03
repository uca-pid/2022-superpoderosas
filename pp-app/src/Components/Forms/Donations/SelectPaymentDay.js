import React from "react"
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const SelectPaymentDay = ( ) => {
  const { subsPeriod, paymentDay, setPaymentDay} = useSubscriptionPeriod()
  
    return (
      <div className="space-y-4">
      <div className="font-Pop-R text-lg text-gray-400">
        {(subsPeriod.value === "1") ?
        "¿Qué día del mes quiere que se realize el pago?"
        :"¿Qué día quiere comenzar a donar?"}
      </div>
      <div className="flex flex-row">
            <div className="md:basis-1/2"> 
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      disablePast
                      value={paymentDay}
                      onChange={(newPaymentDay) => {
                        setPaymentDay(newPaymentDay);
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