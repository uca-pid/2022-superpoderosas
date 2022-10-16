import { useSelectionOnTable } from "../../Context/SelectionsOnTable"
import { useEffect, useState } from "react";
const Sidebar = (props) => {
  const {showSidebar, setShowSidebar, setSelectedUser, selectedUserInfotmation} = useSelectionOnTable();
  const [userData, setUserData] = useState([{}])
  const closeSidebar= () => {
    setShowSidebar(false);
      setSelectedUser(null);
  }

  useEffect(() => {
    if (selectedUserInfotmation) setUserData([{title: "Nombre y Apellido", information: selectedUserInfotmation.name+' '+selectedUserInfotmation.lastname}, {title: "Id del usuario", information: selectedUserInfotmation.id},{title:"Email", information:selectedUserInfotmation.email}]);
  }, [selectedUserInfotmation])
  

    return (
        <>
        { showSidebar ?
          <div
          className={`top-0 right-0 w-[35vw] bg-white border-l border-[#C3D5AF] fixed h-full z-50 ease-in-out duration-700 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}>
              <button
                className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={closeSidebar}
                >
                    x
              </button>
              <div className="flex flex-col">
                <div className="p-10 text-2xl w-full font-Pop-M greenBg border-2 text-white">Información del Usuario</div>
                <div className="p-10 flex flex-col space-y-6">
                {userData.map((data) => {
                    return (
                        <div key={data.title} className="blackText flex flex-col space-y-2 lg:space-y-3">
                            <div className="tracking-wide text-lg font-Pop-M uppercase greenText">{data.title}</div>
                            <div className="font-Pop-R text-lg text-gray-500">{data.information}</div>
                        </div>
                );})}
                </div>
              </div>
            </div>
            : <></>}
          </>
    )
  }
  
export default Sidebar