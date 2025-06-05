import styled from "styled-components";

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;