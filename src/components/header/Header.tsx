import { HeaderContainer } from "./styles";
import logo from "/Logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
