import { Section, SectionTitle } from "../styles/ContainerStyle";
import {
  CardsContainer,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  Tag,
  TagContainer,
} from "../styles/SkillStyle";

const skills = [
  {
    icon: "💻",
    title: "Frontend Development",
    description:
      "Modern React, Next.js, and TypeScript applications with styled-components",
    tags: ["React", "Next.js", "TypeScript", "Styled Components"],
  },
  {
    icon: "⚡",
    title: "Backend Development",
    description: "Scalable Node.js APIs, databases, and cloud infrastructure",
    tags: ["Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native",
    tags: ["React Native", "iOS", "Android", "Expo"],
  },
];

export default function Skills({ title = "Skills & Expertise" }) {
  return (
    <Section >
      <SectionTitle>{title}</SectionTitle>
      <CardsContainer>
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardIcon>{skill.icon}</CardIcon>
            <CardTitle>{skill.title}</CardTitle>
            <CardDescription>{skill.description}</CardDescription>
            <TagContainer>
              {skill.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </TagContainer>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
}
