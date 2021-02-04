import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-information">
            <h1>Aldo Ferdiansyah</h1>
            <Typed
                className="typed-text"
                strings={["Web Design","Web Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </div>
        </div>
    )
}

export default Header
