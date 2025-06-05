import styled from "styled-components";

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.description};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.6;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
