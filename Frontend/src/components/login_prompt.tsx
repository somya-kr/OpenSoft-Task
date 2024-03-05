import Link from "next/link";
import "../styles/login.scss";

export default function LoginPrompt() {
  return (
    <div className="login">
      <p className="login_h">LOGIN</p>
      <p>Username</p>
      <input type="text" name="username" />

       <p>Password</p>
      <input type="password" name="password" /> 
     




      <input type="button" value={"Login"} />
      <Link className="link" href={"/signup"}>
        Sign up
      </Link>
      <Link className="link" href={"/home"}>
        Skip Login
      </Link>
    </div>
  );
}
