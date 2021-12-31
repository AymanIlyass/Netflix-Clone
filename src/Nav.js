import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 150) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Netflix_logo_%282%29.svg/640px-Netflix_logo_%282%29.svg.png"
                alt="Netflix Logo" />
            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
                alt="Netflix Logo" />
        </div>
    )
}

export default Nav