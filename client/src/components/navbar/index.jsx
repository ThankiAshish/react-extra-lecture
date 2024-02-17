import { Link } from 'react-router-dom'

import { privateRoutes } from '../../routes/index'

import UserStore from '../../store/LoginStore'

const Navbar = () => {
  const { logout } = UserStore();
  
  return (
    <nav>
      <h2>Admin Panel</h2>
      <ul>
        {
          privateRoutes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))
        }
        <button className='btn' onClick={logout}>Logout</button>
      </ul>
    </nav>
  )
}

export default Navbar