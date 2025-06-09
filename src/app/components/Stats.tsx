import {
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
} from "../styles/StatsStyle";
import { Section, SectionTitle } from "../styles/ContainerStyle";
import { useRef, useState, useEffect } from "react";

interface AnimatedNumberProps {
  targetNumber: string;
  duration?: number;
}

interface Statitem {
  number: string;
  label: string;
}

interface StatsProps {
  title?: string;
  stats?: Statitem[];
}

function AnimatedNumber({
  targetNumber,
  duration = 1000,
}: AnimatedNumberProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const getNumericValue = (str: string): number => {
    const match = str.toString().match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const numericTarget = getNumericValue(targetNumber);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(
              startValue + (numericTarget - startValue) * easeOutQuart
            );
            setCurrentNumber(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, duration, hasAnimated]);

  const formatDisplayNumber = (num: number): string => {
    const originalStr = targetNumber.toString();
    if (originalStr.includes("+")) {
      return `${num}+`;
    } else if (originalStr.includes("/")) {
      const parts = originalStr.split("/");
      return `${num}/${parts[1]}`;
    }
    return num.toString();
  };

  return <span ref={elementRef}>{formatDisplayNumber(currentNumber)}</span>;
}

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
        {stats.map((stat, idx) => (
          <StatCard key={idx}>
            <StatNumber>
              <AnimatedNumber targetNumber={stat.number} />
            </StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>
    </Section>
  );
}
