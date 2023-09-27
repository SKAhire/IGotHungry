import React from 'react'

const Navbar = () => {
    return (
        <>

            <header className="navbar">
                <div className="navContainer">
                    {/* <div className="navIcon">
                        <a href="/"><img src="..\logo\logo_line.png" alt="IGotHungry" /></a>
                    </div> */}
                    <div className="navMenu">

                           <a href="/">Home</a>
                            <a href="/">Recipes</a>
                            <a href="/">Start Here</a>
                            <a href="/" className='logoImg'><img src="..\logo\logo_white.png" alt="IGotHungry" /></a>
                           <a href="/">About</a>
                           <a href="/">Submit</a>
                           <a href="/">Contact</a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
