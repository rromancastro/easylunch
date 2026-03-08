import { NavBar } from "@/app/components";
import Image from "next/image";

export const AppHeader = () => {
    return (
        <header id="appHeader">
            <NavBar />
            <Image src="/app/header/phone.png" id="appHeaderImage" alt="Phone" width={527} height={933} />
            <div className="glass" id="appHeaderCard">
                <h1>Nuestra App</h1>
                <p>Fácil de usar, intuitiva y sin necesidad de descargar, accede desde la web y hace tu pedido.</p>
                <a href="#">Ir a la app</a>
            </div>
        </header>
    );
}