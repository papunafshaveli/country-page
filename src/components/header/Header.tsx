import logo from "/Logo.svg";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
