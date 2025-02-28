import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_credits">© {new Date().getFullYear()} neuvichidmartyn. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
