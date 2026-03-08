import { AppThirdSectionCard } from "@/app/components/app"


export const AppThirdSection = () => {
    return <section id="fourthSection">
        <div id="fourthSectionTitle">
            <h2>Así de facil</h2>
        </div>
        <AppThirdSectionCard
            number={1}
            title={"Ingresá a la app"}
            description={"Podés ingresar desde tu teléfono o tu computadora, sin descargas desde tu navegador."}
            buttonText={false}
            bgData={"radial-gradient(69.39% 100.61% at 30.61% 50%, #E7E7E7 0%, #BBBBBB 93.01%)"}
        />
        <AppThirdSectionCard 
            number={2}
            title={"Elegí tu menú"}
            description={"Seleccioná el día y hace tu pedido, podes elegir plato principal, bebida y postre."}
            buttonText={"Ver menú"}
            buttonLink={"#"}
            inverted={true}
            bgData={"radial-gradient(43.41% 91.49% at 62.26% 62.3%, #A2DD9A 0%, #5C9C53 100%)"}
        />
        <AppThirdSectionCard 
            number={3}
            title={"Organiza tu mes"}
            description={"Podes organizar los pedidos del mes y sumarlos al pedido."}
            buttonText={"Ver app"}
            buttonLink={"#"}
            bgData={"radial-gradient(92.47% 125.86% at 16.43% 63.83%, #E7E7E7 0%, #818181 100%)"}
        />
        <AppThirdSectionCard 
            number={4}
            title={"¡Ya está!"}
            description={"Comfirmá el pedio, elegí como pagar y esperálo en tu trabajo."}
            buttonText={"Ver menú"}
            buttonLink={"#"}
            inverted={true}
            bgData={"radial-gradient(79.47% 79.47% at 71.74% 56.76%, #A2DD9A 0%, #5C9C53 100%)"}
        />
    </section>

}