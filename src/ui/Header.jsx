import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-container-list'>
          <li className='container-list-item'>
            <Link to={'home'} className='item-link item-link-font'>
              GreenGarden
            </Link>
          </li>
          <li className='container-list-item'>
            <Link to={'about'} className='item-link item-link-font'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
