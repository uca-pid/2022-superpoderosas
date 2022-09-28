const UserEmailInput = () => {  
    return (
      <div className="w-full mt-4 mx-1 flex-auto">
        <input
          type="text"
          placeholder="Ingrese su correo"
          className="rounded text-left p-3 w-full h-12 border hover:bg-gray-100 bg-gray-200 border-gray-400 focus:outline-none focus:border-orange-400 focus:border-3 active:border-3 text-gray-400 font-bold">
        </input>
      </div>
    )
}
export default UserEmailInput