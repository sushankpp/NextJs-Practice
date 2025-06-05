"use client";
import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme: { spacing } }) => spacing.medium};
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme: { colors } }) => colors.title};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.6;
`;
