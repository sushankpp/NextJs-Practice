import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Sushank Pandey. All rights reserved.</p>
      <p>Built using Next & Styled Components</p>
    </FooterContainer>
  );
}
