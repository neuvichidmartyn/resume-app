import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./FixedContacts.css";

function FixedContacts({ resumeRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  // Функция для обработки клика вне панели
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Функция для скачивания резюме в PDF
  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="fixed-buttons" ref={panelRef}>
      {/* Кнопка для скачивания PDF */}
      <button className="download-button-fixed" onClick={downloadPDF}>
        <span className="icon">📄</span>
        <span className="text">Скачать</span>
      </button>

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
    </div>
  );
}

FixedContacts.propTypes = {
  resumeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default FixedContacts;
