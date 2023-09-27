import React from 'react'

const Navbar = () => {
    return (
        <>

            <header className="navbar">
                <div className="navContainer">
                    <div className="navIcon">
                        <a href="/"><img src="..\logo\logo_line.png" alt="IGotHungry" /></a>
                    </div>
                    <div className="navMenu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Recipes</a></li>
                            <li><a href="/">Start Here</a></li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
