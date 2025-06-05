import styled from "styled-components";
interface CardProps {
  $type?: "tech" | "design" | "business" | string;
}

export const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme, $type }) => {
      switch ($type) {
        case "tech":
          return theme.colors.primary;
        default:
          return theme.colors.secondary;
      }
    }}
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.medium};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.5;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs}
    ${({ theme }) => theme.spacing.small};
  border-radius: 20px;
  font-size: 0.875rem;
  margin: 0 ${({ theme }) => theme.spacing.xs}
    ${({ theme }) => theme.spacing.xs} 0;
  display: inline-block;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
