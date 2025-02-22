import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }
  

  return (
    <header>
      <div className="container">
        <Link to="/">
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          
        </nav>
      </div>
    </header>
 
  );
}  
