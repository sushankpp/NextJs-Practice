import { Section, SectionTitle } from "../styles/ContainerStyle";
import {
  ProjectCard,
  ProjectContent,
  ProjectLink,
  ProjectDescription,
  ProjectTitle,
  ProjectsGrid,
  ProjectImage,
} from "../styles/ProjectStyle";

export default function ProjectsSection({
  title = "Featured Projects",
  projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
      imageUrl: "https://picsum.photos/500/300",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing creative work and professional experience.",
      imageUrl: "https://picsum.photos/400/300",
      link: "#",
    },
    {
      id: 3,
      title: "Travel Blog",
      description:
        "A travel blog with dynamic content management and interactive maps.",
      imageUrl: "https://picsum.photos/500/400",
      link: "#",
    },
  ],
}) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link}>View Project →</ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}
