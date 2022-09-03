
import LoginButton from "./Components/Registration Buttons/loginButton";
import LogoutButton from "./Components/Registration Buttons/logoutButton";
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './Components/Profile/Profile';

export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
  <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}