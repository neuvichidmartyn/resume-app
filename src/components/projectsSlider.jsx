import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import resumeData from "../data/resumeData";
import "./projectSlider.css"; // Подключаем стили

function ProjectsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="projects-slider">
      <h3 className="section-title">Проекты</h3>

      {/* Стрелки навигации */}
      <button ref={prevRef} className="slider-arrow slider-prev">⬅</button>
      <button ref={nextRef} className="slider-arrow slider-next">➡</button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {resumeData.projects.map((project, index) => (
          <SwiperSlide key={index} className="projects-slide">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="projects-image" />
              <h4 className="projects-title">{project.title}</h4>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsSlider;
