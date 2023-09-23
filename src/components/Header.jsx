import React from "react"
import IMG from "../assets/my-image.jpg"
import LinkedIn from "../assets/icon-linkedin.png"
import Mail from "../assets/Mail.jpg"

export default function Header(){
    return (
        <header>
          <img className="my-image" src={IMG} />
          <div className="info">
                <h1>Mastoora Turkmen</h1>
                <p className="job">Frontend Developer</p>
                <a href="mastooraturkmen.website">mastooraturkmen.website</a>
                <div className="buttons">
                    <button className="mail-btn">
                    <img className="mail icon" src={Mail} /><a className="mail-btn email" href="#">Email</a>
                    </button>
                    <button className="linkedin-btn"> 
                    <img className="linkedin icon" src={LinkedIn} /><a className="linkedin-a" href="#">LinkedIn</a>
                    </button>
                </div>
            </div>
        </header>
    )
}