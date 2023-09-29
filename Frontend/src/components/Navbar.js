import React,{useState} from 'react'

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
                        <a href="/"><img src="..\logo\logo_line.png" alt="IGotHungry" /></a>
                    </div> */}
                    <div className="navMenu">

                           <a href="/">Home</a>
                            <a href="/">Recipes</a>
                            <a href="/">Start Here</a>
                            <a href="/" className={`${scrollTop.imgClass}`}><img src={`${scrollTop.scrollImg}`} alt="IGotHungry" /></a>
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
