import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

const projects = [
  { image: project1, title: "Project Title", category: "Interior Fit-Out" },
  { image: project2, title: "Project Title", category: "Civil Works" },
  { image: project1, title: "Project Title", category: "MEP" },
  { image: project2, title: "Project Title", category: "Commercial" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/60 mb-2">Our Projects</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Milestones That Define<br />Our Journey of Excellence
            </h2>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md">
            Each completed project reflects our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group rounded-xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4">
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-base font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
