"use client"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    return <nav>
        <Image onClick={() => router.push("/")} id="navLogo" src="/logo.png" alt="Easy Lunch Logo" width={120} height={26} />
        <div id="navLinks">
            <a style={{color: pathname === "/app" ? "#138E03" : "#ffffff"}} href="/app">App</a>
            <a style={{color: pathname === "/servicios" ? "#138E03" : "#ffffff"}} href="/servicios">Servicios</a>
            <a style={{color: pathname === "/faq" ? "#138E03" : "#ffffff"}} href="/faq">FAQ</a>
            <a style={{color: pathname === "/trabaja-con-nosotros" ? "#138E03" : "#ffffff"}} href="/trabaja-con-nosotros">Trabaja con nosotros</a>
        </div>
        <a href="#" id="navButton">Cotizá ahora</a>
    </nav>
}