import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div>
     <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>about</li></Link>
        <Link to="/contact"><li>contact</li></Link>

    </nav>
   </div>
  )
}

export default Navbar
