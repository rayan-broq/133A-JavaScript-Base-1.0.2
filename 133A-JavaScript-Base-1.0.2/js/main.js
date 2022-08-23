/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Rayan Broquet
 * @version 0.2
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code
    const a = Number(prompt('Entrez un nombre : '));
    const b = Number(prompt('Entrez un deuxieme nombre : '));

    if (isNaN(a) || isNaN(b)) {
      alert('Entrez un nombre !');
      return;
    }
  alert(`Résultat ${a + b} !`);

}()); // Main IIFE