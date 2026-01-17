function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="project-card">
        <h2>User Registration & Management System</h2>
        <p>Laravel | MySQL | MVC</p>
        <p>
          Developed a secure user management system with CRUD operations and PDF report
          generation for administrative efficiency.
        </p>
        <a href="https://github.com/Krishan978/Member-Registration-System" target="_blank">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h2>Todo List Web Application</h2>
        <p>HTML | CSS | JavaScript</p>
        <p>
          Built a responsive task management app supporting deadlines and CRUD operations.
        </p>
        <a href="https://github.com/Krishan978/Todo-List" target="_blank">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h2>University Event Platform</h2>
        <p>HTML | CSS | JavaScript | MySQL</p>
        <p>
          Contributed to a team project developing a university event management platform.
        </p>
        <a href="https://github.com/Krishan978/UOK-EventDesk" target="_blank">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
