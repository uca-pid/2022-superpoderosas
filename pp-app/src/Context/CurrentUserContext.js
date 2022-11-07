import React, { useState, useMemo } from 'react'
import AuthService from '../services/auth.service'
import DonationService from '../services/donations.service'
import { useEffect } from 'react'
import ImageService from '../services/images.service'

const CurrentUserContext = React.createContext()

export function CurrentUserContextProvider (props) {
  const currentUser = AuthService.getCurrentUser();
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);

  useEffect(() => {
    DonationService.getSubscription(currentUser.id).then(res=>{res? setSubscriptionData(res.data) : setSubscriptionData(null)});
  }, [currentUser.id])
  useEffect(() => {
    ImageService.getImageUrl().then((url) => {
      setProfilePictureURL(url);
    });
  }, []);

  const value = useMemo(() => {
    return {
        currentUser,
        subscriptionData,
        profilePictureURL,
    }
  }, [currentUser, subscriptionData, profilePictureURL])

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