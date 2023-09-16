import { NavLink } from 'react-router-dom'
import logo from './../asset/logo.png'
import './../index.css'
function Header() {
  return (
    <header>
      <div className="header-section">
        <img src={logo} />
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'about'}>About</NavLink>
          <NavLink to={'exit'}>Exit</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
