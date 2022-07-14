import { Link } from 'react-router-dom';

function Header() {
    return (   <nav className='purple darken-4'>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Recipes Project</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/johnnychikabila/recipes-proejct" target= '_blank' rel="noreferrer">Git</a></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>
      </nav>

    )
}

export {Header}