import Menu from "../molecules/Menu";
import Logo from "../molecules/Logo";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Logo></Logo>
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
