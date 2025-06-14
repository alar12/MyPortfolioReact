import React from 'react';

function ExperienceSection() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title" data-aos="fade-down">My Experience</h2>
        <div className="serv-content">
          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-laptop-code"></i>
              <div className="text">Schnucks (Seneor Software Engineer Full Stack)</div>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Full Stack Developer - Morgan Stanley</div>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Full-stack Developer - Wesco International, Inc</div>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Full-stack Developer - Desert Financial Credit Union</div>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="box">
              <i className="fas fa-mobile-alt"></i>
              <div className="text">Intern at Evoke Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
