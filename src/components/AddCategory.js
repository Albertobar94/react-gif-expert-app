import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputchange = ( e ) => {
        setinputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( prev => [inputValue, ...prev ])
            setinputValue('');
        }


    }

    return (
            <form 
                action="#" 
                onSubmit={ handleSubmit }
                >
                <input 
                        type="text"
                        value={ inputValue }
                        onChange={ handleInputchange }

                    />

            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}