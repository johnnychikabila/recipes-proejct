import {Link} from 'react-router-dom';

export function About() {
    return <>
        <h1>Hello, from About page!</h1>
        
          <span><Link to="/" style={{fontSize: '14px'}} >Home</Link></span>
          <span> / </span>
          <span><Link to="/about" style={{fontSize: '14px'}} >About</Link></span>
    </>
}