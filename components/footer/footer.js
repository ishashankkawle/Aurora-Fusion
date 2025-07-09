'use client';
import logo from '../../public/globe.svg';
import styles from './footer.module.css'
import Image from 'next/image'




export default function Footer() {
    let year = new Date().getFullYear()


    return (
        <>
            <div className='border-solid border-sub d-flex text-sm justify-content-between px-3 py-2 position-relative bottom-0 start-0 end-0 align-items-center'>
                <span>Copyright <big><b>&copy;</b></big> {year - 1} - {year}</span>
                <span>Created & Powered by <strong> Shashank Kawle </strong> with <Image src={logo} width={9} height={9} /> Laniak Tech</span>
                <span>All Rights Reserved</span>
            </div>
        </>
    )
}