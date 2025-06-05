import {
  HeaderContainer,
  Title,
  Subtitle,
  Description,
  ButtonGroup,
} from "../styles/HeaderStyle";
import { Button } from "../styles/ContainerStyle";

export default function Header({
  title = "Sushank Pandey",
  subTitle = "Full Stack Developer & Designer",
  description = "Crafting exceptional digital experiences with modern technologies. This showcase demonstrates the power and flexibility of styled-components in creating beautiful, maintainable React applications.",
  buttonText = "View Portfolio",
  buttonSecondaryText = "Download CV",
  buttonAccentText = "Contact Me",
}) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      <Description>{description}</Description>
      <ButtonGroup>
        <Button>{buttonText}</Button>
        <Button>{buttonSecondaryText}</Button>
        <Button>{buttonAccentText}</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}
