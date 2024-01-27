import Link from 'next/link'
import '../styles/login.scss'

export default function SignUpPrompt() {
    return (
        <div className="login">
            <p>SIGN UP</p>
            <p>Username</p>
            <input type='text' name='username'/>
            <p>Password</p>
            <input type='password' name='password'/>
            <p>Confirm Password</p>
            <input type='password' name='confirm_password'/>
            <input type='button' value={'Sign Up'}/>
            <Link className='link' href={'/login'}>Login</Link>
        </div>
    )
  }