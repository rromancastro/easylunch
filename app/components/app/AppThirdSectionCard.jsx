import Image from "next/image"

export const AppThirdSectionCard = ({ number, title, description, buttonText, buttonLink, inverted = false, bgData}) => {
    return <article style={{background: bgData}} className={`fourthSectionArticle ${inverted ? 'inverted' : ''}`}>
                <h3>{number}.</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={`${buttonLink}`} style={{display: !buttonText ? 'none' : "flex"}}>{buttonText}</a>
                <Image className="appThirdSectionImage" id={`appThirdSectionImage${number}`} src={`/app/thirdSection/thirdSection${number}.png`} alt="app" width={500} height={500} />
            </article>
}