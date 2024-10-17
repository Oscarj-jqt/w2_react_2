// Importation de React
// import React from 'react';
// Importation de createElement dans React
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import Somme from './Somme';

// Création d'un élément React avec classe
// const titre = createElement(
//   'h1', 
//   { className: 'classA classB' },
//   'Hello World !',
// );

// const contenu = <HelloWorld></HelloWorld>
const contenu = <HelloWorld/>;
const somme = <Somme/>;

// Récupération de la div d'id root du HTML
const racineProjet = createRoot(document.querySelector('#root'));


// Affichage de l'élément React à partir de l'élément récupéré
// racineProjet.render(titre)
racineProjet.render(contenu)


