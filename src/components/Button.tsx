import { ButtonContainer, ButtonContainerProps } from './Button.styles'

export function Button({ variant = 'primary' }: ButtonContainerProps) {
  return (
    <>
      <ButtonContainer variant={variant}> Click me </ButtonContainer>
    </>
  )
}
