import Image from "next/image"
import { FourthSectionCard } from "../components"

export const FourthSection = () => {
    return (
        <section id="fourthSection">
            <div id="fourthSectionTitle">
                <h2>De la app a tu oficina</h2>
                <p>Así funciona nuestro servicio, diseñamos un servicio personalizado para ofrecerte un almuerzo de calidad con opciones para todos los gutstos y sin tener que moverte de la oficina. Fácil y rápido con un par de clicks gestiona tus pedidos</p>
            </div>

            <FourthSectionCard 
                number={1} 
                title={'Hacés tu pedido'} 
                description={'Cada integrante del equipo podrá ingresar a la plataforma con su usuario y seleccionar lo que más le guste.'} 
                buttonText={'Ver app'} 
                buttonLink={'#'} 
                bgData={'radial-gradient(69.39% 100.61% at 30.61% 50%, #E7E7E7 0%, #BBBBBB 93.01%);'}
            />

            <FourthSectionCard 
                number={2} 
                title={'Hacés tu pedido'} 
                description={'Cada integrante del equipo podrá ingresar a la plataforma con su usuario y seleccionar lo que más le guste.'} 
                buttonText={'Ver menú'} 
                buttonLink={'#'} 
                inverted={true}
                bgData={'radial-gradient(43.41% 91.49% at 62.26% 62.3%, #A2DD9A 0%, #5C9C53 100%);'}
            />

            <FourthSectionCard 
                number={3} 
                title={'Te lo enviamos'} 
                description={'Hacemos el delivery de las viandas en camiones refrigerados, según los días y horarios acordados.'} 
                buttonText={'Ver app'} 
                buttonLink={'#'}
                bgData={'radial-gradient(92.47% 125.86% at 16.43% 63.83%, #E7E7E7 0%, #818181 100%);'}
            />

            <FourthSectionCard 
                number={4} 
                title={'Le das tu toque'} 
                description={'¡Tu almuerzo ya está listo! Condimentá a gusto y calentalo. ¡A disfrutar!'} 
                buttonText={'Ver menú'} 
                buttonLink={'#'}
                inverted={true}
                bgData={'radial-gradient(79.47% 79.47% at 71.74% 56.76%, #A2DD9A 0%, #5C9C53 100%);'}
            />

            <FourthSectionCard 
                number={5} 
                title={'¡A disfrutar!'} 
                description={'La hora del almuerzo es clave para un ambiente laboral favorable. Nuestro objetivo es que vos y tu equipo disfruten de sus comidas a diario.'} 
                buttonText={'Ver app'} 
                buttonLink={'#'}
                bgData={'radial-gradient(61.36% 526.44% at 11.49% 32.09%, #E7E7E7 0%, #999999 100%);'}
            />
        </section>
    )
}