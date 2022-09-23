import "./style.css";

const Header = ({ setIsLoggedIn }) => {
  const dash = () => {
    setIsLoggedIn(false);
  };

  return (
    <header>
      <h1 className="title">Nu Kenzie</h1>
      <button onClick={dash} className="btn_back">
        Inicio
      </button>
    </header>
  );
};

export default Header;
