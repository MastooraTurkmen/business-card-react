import React from "react"
import Twitter from "../assets/Twitter-Icon.png"
import Facebook from "../assets/Facebook-Icon.png"
import Instagram from "../assets/Instagram-Icon.png"
import GitHub from "../assets/GitHub-Icon.png"


export default function Footer(){
    return(
        <footer className="footer">
            <img className="logs" src={Twitter} />     
            <img className="logs" src={Facebook} />     
            <img className="logs" src={Instagram} />     
            <img className="logs" src={GitHub} />     
        </footer>
    )
}
