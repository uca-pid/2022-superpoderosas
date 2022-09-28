const CustomAmountButton = ({ onClick }) => {
  return (
    <div className='w-2/3 p-1'>
      <button
        onClick={onClick}
        className='rounded text-center p-3 flex-auto w-full h-12 w-6/8 border m-1 hover:bg-gray-100 bg-gray-200 border-gray-400 text-gray-400'>
        Otro monto
      </button>
    </div>
  )
}

export default CustomAmountButton