let Livre = (function () {

    function injectionDom() {
        
        let dom = 
        `
        <p><small> Titre : </small> ${this.detail.titre}</p>
        <p><small> Sujet : </small> ${this.detail.sujet}</p>
        <p><small> Prix : </small> ${this.detail.prix}  ${this.detail.rabais ? '(15%)' : '' }</p>
        <p><small> Auteur : </small> ${this.detail.auteur}</p>
        <p><small> Editeur : </small> ${this.detail.editeur}</p>
        <p><small> Pages : </small> ${this.detail.pages}</p>
        `

        this.elDetail.insertAdjacentHTML('beforeend', dom)
    }


    let Livre = function (elLivre, index) {
        this.elDetail   = elLivre.querySelector('[data-js-produit-detail]');
        this.detail     = produits.livres[index];
        console.log(this.elDetail)
        console.log(this.detail)

        this.injectionDom();


    }

        // Prototype
        Livre.prototype = {
            // Méthodes publiques
            injectionDom,
        };

return Livre

    // let titre 
    //     sujet,
    //     prix,
    //     auteur,
    //     editeur,
    //     pages;

        
    // // let Livre = function() {
    // //     this.titre  = titre; 
    // //     this.sujet  = sujet;
    // //     this.prix   = prix;
    // //     this.auteur = auteur;
    // //     this.editeur= editeur;
    // //     this.pages  = pages

    // // };
    // function name() {

    //     return titre
    // // Livre.prototype
    
    // }
    // return name();

})();