import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Live Stream Highlights',
    description: 'A collection of my wildest, funniest, and most viral moments on stream. Pure unfiltered energy.',
    videoId: 'oiCk3iFsyMw',
    link: 'https://www.youtube.com/@IShowSpeed'
    },
    {
      title: 'Music & Bangers',
      description: 'From “World Cup” to other tracks I dropped — this showcases my passion for music and vibes.',
      videoId: '8n5dJwWXrbo', // Replace with real video ID
      link: 'https://www.youtube.com/@IShowSpeed'
    },
    {
      title: 'Fan Moments & IRL',
      description: 'Real-life moments with fans, travel clips, and unforgettable memories from the journey.',
      videoId: 'GxlWfenzL9M', // Replace with real video ID
      link: 'https://www.youtube.com/@IShowSpeed'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
