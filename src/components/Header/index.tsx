import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { LogoIgnite } from '../../assets/logo-ignite'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoIgnite />
      <nav>
        <NavLink to="/home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
