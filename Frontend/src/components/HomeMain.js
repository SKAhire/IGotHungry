import React from 'react';
import Categories from './Categories';
import Recipes from './Recipes';
const HomeMain = () => {
    return (
        <>

            <section className="Categories">
                <Categories />
            </section>
            <section>
                about section
            </section>
            <section className="recipies">
                <Recipes />
            </section>
            <section>
                submit section
            </section>

        </>
    )
}

export default HomeMain
