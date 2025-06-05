import styled from "styled-components";

export const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: ${({ theme }) => theme.fonts.sans};
  transition: border-color 0.3s ease;
`;
