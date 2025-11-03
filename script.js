// Animation d'arrivée sur la page
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector("main").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("main").style.transition = "opacity 1s";
        document.querySelector("main").style.opacity = 1;
    }, 180);

    // Boutons scroll vers la section d'inscription
    document.getElementById('btn-tuteur').addEventListener('click', function() {
        window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
    });
    document.getElementById('btn-benevole').addEventListener('click', function() {
        window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
    });
    document.getElementById('btn-jeune').addEventListener('click', function() {
        window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
    });
});

// Explication pour ajouter des images :
// Pour personnaliser les images des blocs, remplace l'attribut src="https://via.placeholder.com/XXX" par l'URL de ton image hébergée (GitHub, Unsplash ...)
// Exemple : <img src="https://github.com/tonCompte/tonDepot/img/photo1.jpg" alt="Description">

// Pour ajouter des actions sur les boutons (formulaires, popups...), ajoute ton JS ci-dessous.
