import {Link} from 'react-router-dom'

export function Contact() {
    return <>
        <h1>Hello, from Contact page!</h1>
        <h7 >Breadcrumbs: </h7>
          <span><Link to="/" style={{fontSize: '14px'}} >Home</Link></span>
          <span> / </span>
          <span><Link to="/contact" style={{fontSize: '14px'}} >Contact</Link></span>
    </>
}