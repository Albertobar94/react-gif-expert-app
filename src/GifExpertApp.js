import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [category, setcategory] = useState(['One Punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategory } />
            <hr/>


            <>
                { 
                    category.map( item => (
                        <GifGrid 
                            key={ item }
                            category={ item } 

                        />
                    ))
                }
            </>
        </>
    );
}

export default GifExpertApp;