'use client';
import Link from 'next/link';
import styles from './navbar.module.css'
import logo from '@/public/logo.png' 
import Image from "next/image";
import { useContext } from 'react';
import { GlobalContext } from '@/app/_context/GlobalContext';



export default function Navbar() {

    const {protocol, setProtocol} = useContext(GlobalContext);

    const handleProtocolChange = (value) => {
        setProtocol(value)
    }

    return (
        <div au-protocol={protocol}>
            <nav className="navbar navar-sm sticky-top">
                <div className="nav-brand"><Link href="/"><Image src={logo} width={20} height={20} alt='aurora-fusion-logo' />  Aurora-Fusion</Link></div>
                <div className='flex-row align-items-center'>
                    <span>Currunt protocol : </span>
                    <ul className="nav-links">
                        <li>
                            <select onChange={(event) => handleProtocolChange(event.target.value) } defaultValue={protocol}>
                                <option value="ambara">Ambara</option>
                                <option value="aranyak">Aranyak</option>
                                <option value="rudra">Rudra</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}