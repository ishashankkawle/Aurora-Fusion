'use client';
import logo from '../../public/globe.svg';
import styles from './footer.module.css'
import Image from 'next/image'




export default function Footer() {
    let year = new Date().getFullYear()


    return (
        <>
            <div className='d-flex justify-content-between text-x-smaller px-3 py-2'>
                <span>Copyright <big><b>&copy;</b></big> {year - 1} - {year}</span>
                <span>Created & Powered by <strong> Shashank Kawle </strong> with <Image src={logo} width={12} height={12} /> Laniak Tech</span>
                <span>All Rights Reserved</span>
            </div>
        </>
    )
}