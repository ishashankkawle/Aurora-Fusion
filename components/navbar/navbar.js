'use client';
import styles from './navbar.module.css'



export default function Navbar() {
    return (
        <>
            <nav className="navbar navar-sm">
                <div className="nav-brand">Aurora-Fusion</div>
                <ul className="nav-links">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Fleet</a></li>
                    <li><a href="#">Map</a></li>
                    <li><a href="#">Fittings</a></li>
                    <li>
                        <select defaultValue="aranyak">
                            <option value="ambara">Ambara</option>
                            <option value="aranyak">Aranyak</option>
                            <option value="rudra">Rudra</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </>
    )
}