import Image from "next/image"

export const FourthSectionCard = ({ number, title, description, buttonText, buttonLink, inverted = false, bgData}) => {
    return <article style={{background: bgData}} className={`fourthSectionArticle ${inverted ? 'inverted' : ''}`}>
                <h3>{number}.</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={`${buttonLink}`}>{buttonText}</a>
                <Image className="fourthSectionImage" id={`fourthSectionImage${number}`} src={`/sections/fourthSection${number}.png`} alt="app" width={500} height={500} />
            </article>
}