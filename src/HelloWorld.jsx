// import React from 'react';
// import { createElement } from 'react';
// import { createRoot } from 'react-dom/client';
import Somme from "./Somme";
// Création du composant
// Il retourne un élément, une balise unique (1 seul div...)
function HelloWorld() {
    return (
        // On écriT comme en HTML
        <div>
            <h1>Hello World !</h1>
            {/* // Définition des props */}
            <Somme a ={1} b = {2}/>
            <Somme a = {4} b = {5}/>
        </div>
    )
};

// On exporte la fonction
export default HelloWorld;