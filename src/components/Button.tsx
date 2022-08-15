import {ButtonContainerProps} from './Button.styles';

export function Button ({variant = 'primary'}: ButtonContainerProps) { 
  return (
    <>
      <button className={variant}> Click me </button>
    </>
  )
}
