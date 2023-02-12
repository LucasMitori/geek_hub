import { ExitBtn, Header } from "./styles";
import logo from "../../assets/logos/geekhub.jpg";

const HeaderSpace = () => {
  function localStorageClean() {
    localStorage.clear();
  }

  return (
    <Header>
      <div>
        <img src={logo} alt="Geekhub" />
      </div>
      <ExitBtn to={"/login"} onClick={() => localStorageClean()}>
        Sair
      </ExitBtn>
    </Header>
  );
};

export default HeaderSpace;
