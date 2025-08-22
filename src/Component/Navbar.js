import Link from "next/link";
import "./navbar.css";

export default function navbar() {
  return (
    <nav className="navbar">
      <div className="logo">aarogyadut</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/doctors">Doctors</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
