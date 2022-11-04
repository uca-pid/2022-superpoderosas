import React from "react";
import {
  Button,
  Tooltip
} from "@material-tailwind/react";

const InstructionTooltip = (props) => {
  return ( 
    <>
    <Tooltip className={"font-Pop-R w-40 p-3 font-sm"} content={props.tooltipContent} placement="right-start">
    <Button className={`flex self-end shadow-none m-0 p-0 ${props.size}`} class={`flex self-end ${props.size}`} data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" >
        <span class={`animate-ping absolute inline-flex rounded-full bg-[#7BA391] opacity-75 ${props.size}`}></span>
        <span class={`relative inline-flex rounded-full bg-[#7BA391] ${props.size}`}></span>
    </Button>
    </Tooltip>   
    </>              
  );
};

const BasicInfoTooltip = (props) => {
  return ( 
    <>
    <Tooltip className={"font-Pop-R w-52 z-40 p-3 font-sm mt-7 text-center"} content={props.content} placement="right-start">
      <Button className={`shadow-none py-0.5 px-1 h-4 w-4`} data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" >
          <div class={`rounded-full bg-[#7BA391] h-4 w-4 text-white text-center font-Pop-L`}>?</div>
      </Button>
    </Tooltip>  
    </>              
  );
};

const InformationTooltips ={
  InstructionTooltip,
  BasicInfoTooltip
}

export default InformationTooltips;

