import React from 'react';
import Categories from './Categories';
import HomeRecipes from './HomeRecipes';
import { Link } from 'react-router-dom';

const HomeMain = () => {
    return (
        <>

            <section className="Categories">
                <Categories />
            </section>

            <section className='About' style={{ background: `url("../images/bg3.jpg") center no-repeat` }}>
                <div className="homeAbout">
                    <div className="popHead">
                        <span>
                            <em></em>
                        </span>
                        <h2>About</h2>
                        <p>How I Got Hungry started</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur laboriosam voluptate incidunt explicabo rem doloribus asperiores sequi ratione numquam nobis reprehenderit praesentium maxime suscipit iure magni alias ut dicta error quasi quia, eos, exercitationem omnis molestias. Magni explicabo sunt illo, ipsam cupiditate veritatis vel quibusdam consequuntur officiis deserunt repellendus.
                    </p>
                    <div className="viewAll">
                        <Link to="/">Read More</Link>
                    </div>
                </div>
            </section>

            <section className="HomeRecipes">
                <HomeRecipes />
            </section>
            <section className='Submit' style={{ background: `url("../images/bg5.jpg") center no-repeat` }}>
            <div className="homeSubmit">
                    <div className="popHead">
                        <span>
                            <em></em>
                        </span>
                        <h2>Write Us</h2>
                        <p>Share your intresting recipes</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur laboriosam voluptate incidunt explicabo rem doloribus asperiores sequi ratione numquam nobis reprehenderit praesentium maxime suscipit iure magni alias ut dicta error quasi quia, eos, exercitationem omnis molestias. Magni explicabo sunt illo, ipsam cupiditate veritatis vel quibusdam consequuntur officiis deserunt repellendus.
                    </p>
                    <div className="viewAll">
                        <Link to="/">Submit</Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeMain
