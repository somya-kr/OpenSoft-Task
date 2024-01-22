import '../styles/navbar.scss'

import Link from 'next/link'

export default function Navbar(params: {logged_in : boolean}){
    return (<div id='navbar'>
        <p>URL Shortener</p>
        <div><Link className='link' href='/teams'>Teams</Link></div>
        <div>
            {params.logged_in? 
            (<Link className='link' href='/profile'>Profile</Link>) : (<Link className='link' href='/login'>Login</Link>)}
            </div>
    </div>)
}