import React from 'react';
import Categories from './Categories';
import Recipes from './Recipes';
const HomeMain = () => {
    return (
        <>

            <section className="Categories">
                <Categories />
            </section>
            <section className="recipies">
                <Recipes />
            </section>

        </>
    )
}

export default HomeMain
