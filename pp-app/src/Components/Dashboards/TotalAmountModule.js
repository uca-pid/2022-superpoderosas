import {React, useState} from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'

export default function TotalAmountModule(props) {
  const { year, month } = useMonthlySubscriptionStateContext();
  const [ totalAmountPerSelectedMonth, setTotalAmountPerSelectedMonth] = useState(1234);
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

        <div className="inline-block w-full px-7 block flex flex-row justify-around font-Pop-M purpleText rounded-md uppercase h-auto py-2 md:py-1 focus:purpleBorder border-[1px] border-gray-300 mx-15">
          <div className='self-center md:basis-1/8 text-sm md:text-xl lg:text-xl'>
              $
          </div>
          <input
            type='text'
            disabled
            autoFocus
            value = {totalAmountPerSelectedMonth}
            className='shrink md:basis-3/4 self-center border-none focus:outline-none focus:border-transparent focus:ring-0 text-sm md:text-xl lg:text-xl '>
          </input>
          <div className='self-center md:basis-1/8 text-sm md:text-xl lg:text-xl'>
              ARS
          </div>
        </div>
            
        </div>
          
  </>
  );
}

