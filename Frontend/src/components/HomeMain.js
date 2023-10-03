import React from 'react';
import Categories from './Categories';
import Recipes from './Recipes';
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
                        <a href="/">Read More</a>
                    </div>
                </div>
            </section>

            <section className="recipies">
                <Recipes />
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
                        <a href="/">Submit</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeMain
