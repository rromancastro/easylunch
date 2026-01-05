import Image from "next/image"

export const NavBar = () => {
    return <nav>
        <Image id="navLogo" src="/logo.png" alt="Easy Lunch Logo" width={120} height={26} />
        <div id="navLinks">
            <a href="#">App</a>
            <a href="#">Servicios</a>
            <a href="#">FAQ</a>
            <a href="#">Trabaja con nosotros</a>
        </div>
        <a href="#" id="navButton">Cotizá ahora</a>
    </nav>
}