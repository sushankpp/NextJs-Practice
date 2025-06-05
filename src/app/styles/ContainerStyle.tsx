import styled from "styled-components";
export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 32px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin: ${(props) => props.theme.spacing.large} 0 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.large};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) => props.theme.shadows.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;
