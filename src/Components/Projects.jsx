import { projects } from '../data';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="py-20 aligns-item" id="projects">
      <SectionTitle text="Web Devolper" />
      <div className="grid items-center py-16 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
