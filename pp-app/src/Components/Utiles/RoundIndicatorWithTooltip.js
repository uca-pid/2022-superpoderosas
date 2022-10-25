import React from "react";
import {
  Button,
  Tooltip
} from "@material-tailwind/react";

const RoundIndicatorWithTooltip = (props) => {
  const counter = 1;
  return ( 
    <>
    {(counter === 1)?
    <Tooltip className={"font-Pop-R w-40 p-3 font-sm"} content={props.tooltipContent} placement="right-start">
    <Button className={`flex self-end shadow-none m-0 p-0 ${props.size}`} class={`flex self-end ${props.size}`} data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" >
        <span class={`animate-ping absolute inline-flex rounded-full bg-[#7BA391] opacity-75 ${props.size}`}></span>
        <span class={`relative inline-flex rounded-full bg-[#7BA391] ${props.size}`}></span>
    </Button>
    </Tooltip> 
    : <></>
    }  
    </>              
  );
};
export default RoundIndicatorWithTooltip;

