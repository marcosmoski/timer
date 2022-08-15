import styled from "styled-components";


export type ButtonVariant = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

export interface ButtonContainerProps { 
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "blue",
  secondary: "gray",
  tertiary: "gray",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "blue",
  light: "white",
  dark: "black"
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${props =>props.theme.primary};
`;