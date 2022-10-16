import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'

export default function TotalAmountModule(props) {
  const { year, month } = useMonthlySubscriptionStateContext();
  return (
        <>    
        <div className="greyBg darkGrayBottomBorder flex  flex-col space-y-1 p-7">
        {(month<(new Date().getMonth() + 1) && year===(new Date().getFullYear()))?
        <div className="flex flex-[0_0_auto] pt-1 blackText font-Pop-SB uppercase text-lg md:text-xl tracking-wider font-medium">IMPORTE TOTAL COBRADO</div>
        :
        <div className="flex flex-[0_0_auto] pt-1 blackText font-Pop-SB uppercase text-lg md:text-xl tracking-wider font-medium">IMPORTE TOTAL A COBRAR</div>
        }
                      <div className="flex flex-[0_0_auto] blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">{props.data[0].options[month-1].label} de {year}</div>
        </div>
        
         <div className="flex p-7 flex-[0_0_auto]"> 
            {/* AQUI EL IMPORTE */}
          </div>
          
  </>
  );
}

