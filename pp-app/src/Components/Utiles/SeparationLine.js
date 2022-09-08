const SeparationLine = ({ text }) => {
  return (
    <>
        <div className='flex flex-row mt-4'>
            <div className="gray-300 bg-gray-300 h-px basis-[42%] mt-3"></div> 
            <div className="grid basis-[16%]">
                <div className="text-gray-400 justify-self-center ">
                    {text}
                </div>  
            </div>   
            <div className="gray-300 bg-gray-300 h-px basis-[42%] mt-3"></div> 
        </div>
    </>
  )
}

export default SeparationLine;