import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import MileStones from "../../Values/milestones";

const MileStoneModal = (props) =>{
    function closeModal() {
        props.onCloseModal();
    }
    return(
        <>
          <div className="darkGreyBg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl p-10">

              <div className="space-y-9 px-12 py-6 rounded-md relative flex flex-col w-auto bg-white outline-none focus:outline-none">
                <button className="w-full text-end font-Pop-B" onClick={closeModal}>X</button>             
                <div className="pb-8 flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col space-y-2">
                        <img
                            className="object-cover h-32 w-32 rounded "
                            src={props.image}
                            alt="MilestoneImage"
                        />
                        <div className="font-Pop-M uppercase text-xs text-center greenBg text-white rounded-xl p-1">Meta alcanzada</div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div class="mb-1 text-xl font-Pop-M text-gray-900 text-center blackText"> {props.title} </div>
                        <div className="text-center font-Pop-L text-sm px-14">{props.description}</div>
                        <div class="block mb-2 text-xs font-Pop-L leading-none text-gray-500 text-center">Ganado el 7 de Diciembre, 2021</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

const MilestonesBox = (props) => {
    const [modal, setModal] = React.useState(false);
    return (
      <>  
        {modal ?
            <MileStoneModal 
                onCloseModal={()=>setModal(false)}
                image={props.image}
                title={props.title}
                description={props.description}/>
            : null}               
            <li class="mb-10 ml-10 bg-white">
            <span class="flex absolute -left-4 justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-[#f6f7f36b] greenBg">
                <FontAwesomeIcon icon={faHeartPulse} className="h-4 w-4" color="white"/>
            </span>
            <div className="flex flex-row space-x-4 border border-gray-200 rounded-xl px-5 py-4">
                <img
                    className="object-cover h-24 w-24 rounded "
                    src={props.image}
                    alt="MilestoneImage"
                />
                <div className="flex flex-col justify-center">
                    <h3 class="mb-1 text-base font-Pop-R text-gray-900 "> Has alcanzado un hito <button onClick={()=>setModal(true)} className="hover:underline underline-offset-2">{props.title}</button></h3>
                    <time class="block mb-2 text-sm font-Pop-L leading-none text-gray-400">Ganado el 7 de Diciembre, 2021</time>
                </div>
            </div>
        </li>   
      </>
    );
  };

const MilestonesProgress = () => {
  const lastMilestoneAchived=3;  
  return (
    <>
    <div className="py-10 md:py-16">
        <ol class="relative border-l border-[#0f693893]">
            {MileStones.filter(milestone => Number(milestone.num) <= lastMilestoneAchived).map((milestone) => (
                <>
                <MilestonesBox
                image={milestone.image}
                title={milestone.title}
                description={milestone.description}
                />
                </>
            ))}                  
        </ol>
    </div>
    </>
  );
};
export default MilestonesProgress;