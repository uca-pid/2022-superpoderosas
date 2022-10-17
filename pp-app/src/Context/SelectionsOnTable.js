import React, { useState, useMemo, useEffect } from 'react';
import AuthService from "../services/auth.service"
import DonationService from "../services/donations.service";

const SelectionOnTableContext = React.createContext()

export function SelectionOnTableContexProvider (props) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedUserInfotmation, setSelectedUserInfotmation] = useState(null)
  const [selectedUserSubs, setSelectedUserSubs] = useState(null)
  useEffect(() => {
    AuthService.findUserById(selectedUser).then(res=>{res? setSelectedUserInfotmation(res.data) : setSelectedUserInfotmation(null)});
    DonationService.getSubscription(selectedUser).then(res=>{res? setSelectedUserSubs(res.data) : setSelectedUserSubs(null)});
  }, [selectedUser])
  const value = useMemo(() => {
    return {
        selectedUser,
        setSelectedUser,
        showSidebar,
        setShowSidebar,
        selectedUserInfotmation,
        selectedUserSubs
    }
  }, [selectedUser, showSidebar, selectedUserInfotmation, selectedUserSubs])

  return (
    <SelectionOnTableContext.Provider value={value}>
      { props.children }
    </SelectionOnTableContext.Provider>
  )
}

export function useSelectionOnTable() {
  const context = React.useContext(SelectionOnTableContext)
  if (!context) {
    throw new Error('useSelectionOnTable debe estar en el proveedor SelectionOnTableContext')
  }
  return context
}