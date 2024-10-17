import React from 'react';
import PropTypes from 'prop-types';
// Fonction avec paramètres
function Somme( { a, b }) {
    return (
        <>
            <p>Les chiffres sont : {a}, {b}</p>
            <p>La somme est : { a + b }</p>
        </>
    )
};

Somme.propTypes = {
    // PropTypes la classe avec les différents types (func, string...)
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
}

export default Somme;