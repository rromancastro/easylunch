import Image from "next/image"

export const AppSecondSection = () => {
    return <section id="appSecondSection">
        <div>
            <Image className="appSecondSectionImage" src="/app/secondSection/phone.png" alt="App Screenshot" width={200} height={200} />
            <h3>La app</h3>
            <p>Diseñada para facilitarte las cosas, fácil e intuitiva. Hace tus pedidos desde donde quieras cuando quieras.</p>
        </div>
        <div>
            <Image className="appSecondSectionImage" src="/app/secondSection/calendar.png" alt="App Screenshot" width={200} height={200} />
            <h3>Calendario</h3>
            <p>¡Anticipate al calendario! Podés organizar y realizar los pedidos del mes sin esperar al último momento.</p>
        </div>
        <div>
            <Image className="appSecondSectionImage" src="/app/secondSection/mp.png" alt="App Screenshot" width={200} height={200} />
            <h3>Pago online</h3>
            <p>¡Anticipate al calendario! Podés organizar y realizar los pedidos del mes sin esperar al último momento.</p>
        </div>
    </section>
}