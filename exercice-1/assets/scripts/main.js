    window.addEventListener('DOMContentLoaded', function () {

        let elsProduits = document.querySelectorAll('[data-js-produit]');
        
        
        
        for (let i = 0, l = elsProduits.length ; i < l; i++) {
            
            let dataProduit = elsProduits[i].dataset.jsProduit;
            let arrProduit = dataProduit.split('|');
            let index;
            
            switch (arrProduit[0]) {
                case 'livres':
                    index = arrProduit[1]
                    console.log(index)
                    let kife = new Livre(produits.livres[index]);
                    break;
                    case 'jeux':
                        index = arrProduit[1]
                        console.log(index)
                        
                    break;    
            
                default:
                    break;
            }
            
        }
        // console.log(elsProduits.dataset.jsProduit)
        
        
        // console.log(valueProduit)
    });