import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SeventhSection = () => {
    return <section id="seventhSection">
        <div id="seventhSectionTitleContainer">
            <Image src="/sections/seventhSectionTitle.png" id="seventhSectionLogo" alt="Logo Easy Lunch Blanco" width={1488} height={336} />
        </div>
        <div id="seventhSectionUtilities">
            <div id="seventhSectionRedes">
                <h3>Seguinos</h3>
                <div>
                    <a target="_blank" href=""><FaFacebook /></a>
                    <a target="_blank" href=""><FaInstagram /></a>
                    <a target="_blank" href=""><FaXTwitter /></a>
                </div>
                <h3>Menu</h3>
                <p>
                    <a target="_blank" href="">App</a>
                    <a target="_blank" href="">Servicios</a>
                    <a target="_blank" href="">FAQ</a>
                    <a target="_blank" href="">Trabaja con nosotros</a>
                </p>
                <p>
                    Diseño por Francisco Castagnola <br />
                    Desarrollo por Roman Castro
                </p>
            </div>
            <div id="seventhSectionFormContainer">
                <p>Contactanos</p>
                <div>
                    <input type="text" placeholder="Nombre y Apellido" />
                    <input type="text" placeholder="Telefono" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Empresa" />
                </div>
                <button>Consultar</button>
            </div>
        </div>
    </section>
}