import { Area, ButtonToMain, MainSpace, WelcomeSpace } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          <MainSpace>
            <Area>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </Area>
          </MainSpace>
          <WelcomeSpace>
            <h1>Welcome To Geek Hub</h1>
            <h2>the new way to show yourself to the world.</h2>
            <ButtonToMain to={`/login`}>Enter</ButtonToMain>
          </WelcomeSpace>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default LandingPage;
