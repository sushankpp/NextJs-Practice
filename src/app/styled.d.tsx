import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      title: string;
      description: string;
      warning: string;
      cardBg: string;
    };
    spacing: {
      xs: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
    borderRadius: string;
    border: string;
    shadows: { 
      small: string;
      medium: string;
      large: string;
    };
    fonts: {
      sans: string;
    };
  }
}
