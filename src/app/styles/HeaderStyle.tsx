import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.description};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-weight: 400;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.6;
  margin: 0 0 32px;
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.medium};
  justify-content: center;
  flex-wrap: wrap;
  margin: ${({ theme: { spacing } }) => spacing.large} 0;
`;
