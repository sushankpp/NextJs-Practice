import { Section, SectionTitle } from "../styles/ContainerStyle";
import {
  ServicesContainer,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from "../styles/ServiceStyle";

export default function ServicesSection({
  title = "Services Offered",
  services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications tailored to your business needs using the latest technologies.",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "User-centered design that enhances usability and creates beautiful, intuitive interfaces.",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Performance Optimization",
      description:
        "Boost your website's speed and efficiency with advanced optimization techniques.",
    },
  ],
}) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ServicesContainer>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </Section>
  );
}
