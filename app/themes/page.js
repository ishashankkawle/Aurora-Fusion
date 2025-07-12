'use client';

import { useContext } from "react";
import { GlobalContext } from "@/app/_context/GlobalContext";


export default function Themes() {

    const {protocol} = useContext(GlobalContext);
    
    return (
        <div className="p-5" au-protocol={protocol}>
            <div className="flex-column">
                <span className="text-3xl text-accent text-glow">Themes</span>
                <p>Aurora-Fusion provides three types of themes , also called as protocols. These three protocols are </p>
                <ul className="list list-bullet">
                    <li className="list-item">Ambara</li>
                    <li className="list-item">Aranyak</li>
                    <li className="list-item">Rudra</li>
                </ul>
                <p>YYou can switch between these protocols from top navigation bar to try them out on different elements.</p>
            </div>
        </div>
    )
}       