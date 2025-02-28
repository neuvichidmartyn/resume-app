import { useState, useEffect, useRef } from "react";
import "./FixedContacts.css";
// import resumeData from '../data/resumeData';


function FixedContacts() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null); // Создаем ссылку на контейнер

  // Функция для обработки клика вне панели
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false); // Закрываем панель
      }
    }

    // Добавляем обработчик кликов
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed-contacts" ref={panelRef}>
      {/* Кнопка-контакты */}
      <button className={`contacts-button ${isOpen ? "expanded" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="icon">📩</span>
        <span className={`text ${isOpen ? "visible" : ""}`}>Контакты</span>
      </button>

      {/* Блок с контактами */}
      <div className={`contacts-panel ${isOpen ? "open" : ""}`}>
        <a href="mailto:your.email@example.com">📧 Почта</a>
        <a href="https://t.me/yourTelegram" target="_blank" rel="noopener noreferrer">📱 Телеграм</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
      </div>
      {/* <div className={`contacts-panel ${isOpen ? "open" : ""}`}>
        {resumeData.contacts.map((contact, index) => (
          <a key={index} href={contact.link} className="contacts_link" target="_blank" rel="noopener noreferrer">
            {contact.value}
          </a>
        ))}
      </div> */}
    </div>
  );
}

export default FixedContacts;
