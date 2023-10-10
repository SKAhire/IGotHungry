import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let scrollImg = '..\\logo\\logo_white.png'
    let cscrollImg = '..\\logo\\logo_line.png'
    const [scrollTop, setScrollTop] = useState({scrollImg: scrollImg, imgClass:'logoImg', navContainer:'navContainer'})
    window.onscroll = function() {handlescroll()};
    const handlescroll = ()=>{
        if (document.documentElement.scrollTop > 150) {
            setScrollTop({scrollImg: cscrollImg, imgClass:'clogoImg', navContainer:'cnavContainer'})
          } else {
            setScrollTop({scrollImg: scrollImg, imgClass:'logoImg', navContainer:'navContainer'})
          }
    }
    return (
        <>

            <header className="navbar">
                <div className={`${scrollTop.navContainer}`}>
                    {/* <div className="navIcon">
                        <Link to="/"><img src="..\logo\logo_line.png" alt="IGotHungry" /></Link>
                    </div> */}
                    <div className="navMenu">

                           <Link to="/">Home</Link>
                            <Link to="/recipes">Recipes</Link>
                            <Link to="/recipes/id">Start Here</Link>
                            <Link to="/" className={`${scrollTop.imgClass}`}><img src={`${scrollTop.scrollImg}`} alt="IGotHungry" /></Link>
                           <Link to="/about">About</Link>
                           <Link to="/submit">Submit</Link>
                           <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
