import './header.css';

function Header() {
  return (
    <header className="header">
      <h2 className="visually-hidden">Меню</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#about">Обо мне</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Опыт работы</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
