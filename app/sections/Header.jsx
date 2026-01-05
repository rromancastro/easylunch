import { NavBar } from "../components"

export const Header = () => {
    return <header>
        <NavBar />
        <article>
            <h1>
                Comer en el laburo
                <br />
                nunca fue tan fácil.
            </h1>
            <p>Dejanos tu datos si queres saber más y un representante se pondra en contacto en la brevedad.</p>
            <form>
                <input type="text" placeholder="Nombre y Apellido" />
                <input type="email" placeholder="E-Mail" />
                <input type="email" placeholder="Telefono" />
                <input type="text" placeholder="Empresa" />
                <button type="submit">Consultar</button>
            </form>
        </article>
    </header>
}