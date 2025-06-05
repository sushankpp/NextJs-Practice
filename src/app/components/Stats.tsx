import {
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
} from "../styles/StatsStyle";
import { Section, SectionTitle } from "../styles/ContainerStyle";

export default function Stats({
  title = "By the Numbers",
  stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ],
}) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <StatsContainer>
        {stats.map((stats, idx) => (
          <StatCard key={idx}>
            <StatNumber>{stats.number}</StatNumber>
            <StatLabel>{stats.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>
    </Section>
  );
}
