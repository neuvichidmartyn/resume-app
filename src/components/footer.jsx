import './footer.css';
import resumeData from '../data/resumeData.js';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} neuvichidmartyn. Все права защищены.</p>
      <ul className="contacts_list">
            {resumeData.contacts.map((contact, index) => (
              <li key={index} className="contacts_item">
                <a href={contact.link} className="contacts_link" target="_blank" rel="noopener noreferrer">
                  {contact.type}: {contact.value}
                </a>
              </li>
            ))}
          </ul>
    </footer>
  );
}

export default Footer;
