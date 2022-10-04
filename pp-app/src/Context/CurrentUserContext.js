import frequencyEnum from '../Values/frequency.enum'
import React, { useState, useMemo } from 'react'
import AuthService from '../services/auth.service'
import DonationService from '../services/donations.service'

const CurrentUserContext = React.createContext()

export function CurrentUserContextProvider (props) {
    const currentUser = AuthService.getCurrentUser();
    const currentUserSubscription = DonationService.getSubscription(currentUser.id);

  const value = useMemo(() => {
    return {
        currentUser,
        currentUserSubscription,
    }
  }, [currentUser])

  return (
    <CurrentUserContext.Provider value={value}>
      { props.children }
    </CurrentUserContext.Provider>
  )
}

export function useCurrentUser() {
  const context = React.useContext(CurrentUserContext)
  if (!context) {
    throw new Error('useFrequency debe estar en el proveedor CurrentUserContext')
  }
  return context
}