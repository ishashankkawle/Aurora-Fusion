'use client';
import Link from 'next/link';
import styles from './navbar.module.css'



export default function Navbar() {
    return (
        <>
            <nav className="navbar navar-sm sticky-top">
                <div className="nav-brand"><Link href="/">Aurora-Fusion</Link></div>
                <div className='flex-row align-items-center'>
                    <span>Currunt protocol : </span>
                    <ul className="nav-links">
                        <li>
                            <select defaultValue="aranyak">
                                <option value="ambara">Ambara</option>
                                <option value="aranyak">Aranyak</option>
                                <option value="rudra">Rudra</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}