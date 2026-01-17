import profile from "../assets/profile.jpg";
import cv from "../assets/cv.pdf";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>Hi, I’m Krishan Wimalka 👋</h1>
          <h2>Software Systems Technology Undergraduate & Web Developer</h2>

          <p>
            Motivated ICT undergraduate specializing in Software Systems Technology with
            hands-on experience in web development, system analysis, and IT operations.
            I build modern web applications and enjoy turning complex problems into
            reliable digital solutions.
          </p>
          <br></br>
          <div className="hero-buttons">
            <a href="/projects" className="btn-primary">
              View My Projects
            </a>

            <a href={cv} download className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Krishan Wimalka" />
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <section className="experience">
        <h2>Professional Experience</h2>

        <div className="experience-card">
          <h3>IT Intern — Information Technology Resource Development Authority (ITRDA)</h3>
          <span>Aug 2025 – Present | Western Province, Sri Lanka</span>

          <ul>
            <li>Maintained and updated government websites using WordPress.</li>
            <li>Participated in system analysis and requirement gathering for government systems.</li>
            <li>Worked with Laravel and Yii frameworks using MVC architecture.</li>
            <li>Assisted with SSL monitoring, server backups, and system documentation.</li>
            <li>Provided IT support including troubleshooting, installations, and network setup.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
