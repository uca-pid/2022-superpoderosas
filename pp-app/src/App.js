import LogoutButton from "./Components/Registration Buttons/logoutButton";
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './Components/Profile/Profile';
import IntroductionPage from './Pages/Introduction Page/IntroductionPage';

export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <IntroductionPage></IntroductionPage>
        )}
    </>
  );
}