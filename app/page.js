'use client';
import Link from "next/link";
import styles from "./page.module.css";
import logo from '@/public/logo.png' 
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "./_context/GlobalContext";

export default function Home() {

  const {protocol} = useContext(GlobalContext);

  return (
    <div className="p-5" au-protocol={protocol}>
      <div className="flex-column">

        <span className="text-4xl text-glow text-accent"><Image alt='aurora-fusion-logo' src={logo} width={100} height={100}  /> Aurora-Fusion CSS</span>
        <p className="text-lg">Power up your UI with Aurora-Fusion — a hyper-modern, tech-inspired CSS framework built for developers who love a sci-fi aesthetic without sacrificing productivity.</p>
        <div className="flex-row d-inline-flex mb-5">
          <button className="button d-inline-flex"><Link href="/themes">Themes</Link></button>
          <button className="button d-inline-flex"><Link href="/elements">Elements</Link></button>
          <button className="button d-inline-flex"><Link href="/utilities">Utilities</Link></button>
        </div>

        <h1 className="text-glow">Installation</h1>
        <p className="my-0">You can use Aurora-Fusion as an <a className="link" href="#">NPM package</a> or you can add <a className="link" href="#">link to CDN</a> in your project. There is no minimum node version requirement.</p>
        <p className="my-0 mb-2">Please follow below specified steps to Add Aurora-Fusion styles in yyour project.</p>
        <span className="text-xl text-accent">NPM Package</span>
        <span>Use command <code className="code">npm i aurora-fusion</code> to download Aurora-Fusion latest version as NPM package.</span>
        <span>Once installed, you can use below import statement to load the aurora-fusion css in project.</span>
        <code className="p-2 code">import 'aurora-fusion/dist/aurora.css'</code>
        <span className="text-xl text-accent mt-3">CDN</span>
        <span>Use below code to import Aurora-Fusion styles directly through CDN.</span>
        <code className="p-2 code">&lt;link href="https://cdn.jsdelivr.net/npm/aurora-fusion@latest/dist/aurora.css" /&gt;</code>
      </div>
    </div>
  );
}
