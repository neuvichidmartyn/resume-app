import './App.css';
import resumeData from './data/resumeData';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="root_wrapper">
      <h1 className="visually-hidden">Portfolio page</h1>
      <Header />
      <div className="main-container">
        <h2 className="visually-hidden">Резюме</h2>

        <section className="cv-section profile">
          <h3 className="main-title">{resumeData.name}</h3>
          <p className="profile_profession">{resumeData.profession}</p>
          <ul className="profile_skills">
            {resumeData.skills.map((skill, index) => (
              <li key={index} className="profile_skill">★ {skill}</li>
            ))}
          </ul>

          <section className="cv-section about" id="about">
            <h4 className="section-title">О себе</h4>
            {resumeData.description.map((item, index) => (
              <p key={index} className="about_description">{item.paragraph}</p>
            ))}
          </section>
        </section>

        <section className="cv-section section_photo">
          <span className="hotspot"></span>
          <img className="main-photo" src={resumeData.photo[0].path} alt="мое фото" loading="lazy"></img>
        </section>

        <section className="cv-section experience" id="experience">
          <h3 className="section-title">Опыт работы</h3>
          <ul className="experience_list">
            {resumeData.experience.map((job, index) => (
              <li key={index} className="experience_item">
                <div className="experience_header">
                  <span className="experience_position">{job.position}</span>
                  <span className="experience_years">{job.years}</span>
                </div>
                <p className="experience_company">{job.company}</p>
                <p className="experience_description">➤ {job.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section education">
          <h3 className="section-title">Образование</h3>
          <ul className="education_list">
            {resumeData.education.map((edu, index) => (
              <li key={index} className="education_item">
                <h4 className="education_degree">{edu.degree}</h4>
                <p className="education_institution">{edu.institution}, {edu.year}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section projects">
          <h3 className="section-title">Проекты</h3>
          <ul className="projects_list">
            {resumeData.projects.map((project, index) => (
              <li key={index} className="projects_item">
                <h4 className="projects_title">{project.title}</h4>
                <p className="projects_description">{project.description}</p>
                <a href={project.link} className="projects_link" target="_blank" rel="noopener noreferrer">Подробнее</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section contacts" id="contact">
          <h3 className="section-title">Контакты</h3>
          <ul className="contacts_list">
            {resumeData.contacts.map((contact, index) => (
              <li key={index} className="contacts_item">
                <a href={contact.link} className="contacts_link" target="_blank" rel="noopener noreferrer">
                  {contact.type}: {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section languages">
          <h3 className="section-title">Языки</h3>
          <ul className="languages_list">
            {resumeData.languages.map((lang, index) => (
              <li key={index} className="languages_item">
                🌍 {lang.name} — {lang.level}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section hobbies">
          <h3 className="section-title">Хобби</h3>
          <ul className="hobbies_list">
            {resumeData.hobbies.map((hobby, index) => (
              <li key={index} className="hobbies_item">✔ {hobby}</li>
            ))}
          </ul>
        </section>

        <section className="cv-section additional-skills">
          <h3 className="section-title">Дополнительные навыки</h3>
          <ul className="additional-skills_list">
            {resumeData.additionalSkills.map((skill, index) => (
              <li key={index} className="additional-skills_item">✔ {skill}</li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
