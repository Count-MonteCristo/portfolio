import React, { useState } from "react";
import "./css/projects.css";
import projectsData from "./projectsData";

const Projects = () => {
  const [projectsToShow, setProjectsToShow] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("");

  // Function to load more projects when the "Load More" button is clicked
  const loadMoreProjects = () => {
    setProjectsToShow((prevProjectsToShow) => prevProjectsToShow + 6);
  };

  // Sort the projects by completionDate in descending order (latest first)
  const sortedProjects = projectsData.sort(
    (a, b) => new Date(b.completionDate) - new Date(a.completionDate)
  );

  const getTagColor = (tag) => {
    switch (tag) {
      case "DESIGN":
        return "#00AEA9";
      case "DEVELOPMENT":
        return "#F3426E";
      case "MARKETING":
        return "#FD8103";
      default:
        return "#535E74"; // Default color for unknown tags
    }
  };

  return (
    <>
      <div>
        {/* Filter Section */}
        <div className="filters">
          <button
            className={`filter ${selectedFilter === "" ? "active" : ""}`}
            onClick={() => setSelectedFilter("")}
          >
            All
          </button>
          <button
            className={`filter ${selectedFilter === "DESIGN" ? "active" : ""}`}
            onClick={() => setSelectedFilter("DESIGN")}
          >
            Design
          </button>
          <button
            className={`filter ${
              selectedFilter === "DEVELOPMENT" ? "active" : ""
            }`}
            onClick={() => setSelectedFilter("DEVELOPMENT")}
          >
            Development
          </button>
          <button
            className={`filter ${selectedFilter === "MARKETING" ? "active" : ""}`}
            onClick={() => setSelectedFilter("MARKETING")}
          >
            Marketing
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-container-wrapper">
          <div className="projects-container">
            {sortedProjects
              .filter(
                (project) =>
                  selectedFilter === "" || project.tags.includes(selectedFilter)
              )
              .slice(0, projectsToShow)
              .map((project) => (
                <a
                  key={project.id}
                  href={project.link} // Set the destination URL for external links
                  target="_blank" // Open the link in a new tab
                  rel="noopener noreferrer" // Recommended for security to prevent tab-jumping attacks
                  className="project-card"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ backgroundColor: getTagColor(tag) }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-name">{project.name}</div>
                </a>
              ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="projects-button-section">
          {projectsToShow < sortedProjects.length && (
            <button
              className="projects-button"
              onClick={loadMoreProjects}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
