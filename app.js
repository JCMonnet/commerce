
//  var=[] et ensuite push pour "mettre" les 5 produits dans un tabelau products
let products = []
let cd1 = new Product('Michaël Gregorio', '43,00', 'non', 'non', 'musique')
let cd2 = new Product('Daniel Guichard', '43,00', 'non', '20%', 'musique')
let pc1 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK-457FR 17,3 Intel Core I7 16 Go RAM 256 Go SSD + 1 To SATA Noir', '1999.99', 'oui', '20%', 'informatique')
let pc2 = new Product('PC Portable Gaming AsusTUF505DVHN232T 15.6"AMD Ryzen 7 16Go RAM 512 GoSSD Noir', '1499,99', 'oui', '33%', 'informatique')
let pc3 = new Product('PC Portable Gaming AcerPredator Triton700 PT715-51-76D4 15.6"Gaming IntelCore i7 32 GoRAM 256 Go SSD+ 256 Go SATANoir', '3499,99', 'non', 'non', 'informatique')
products.push(cd1, cd2, pc1, pc2, pc3)
let productshtml = ""

// 3/ OBTENIR LA CATEGORIE A PARTIR DU PRODUIT
//  déclarer une var comme nouvel objet de la classe Catégorie, qui reprend le .category de la classe Product du product cd2 et pc3
let cat = new Categorie(cd2)
let cat2 = new Categorie(pc3)
// console.log(cat.name); m'affiche "musique" dans la console
// console.log(cat2.name); m'affiche "informatique" dans la console



// 4/  AFFICHER ELEMENTS EN PROMOTION
// déclaration variable vide qu'on va réutiliser avec innerhtml pour injecter dans le css
// let productshtml = ""
// sur chaque ligne du tableau Products, applique la fonction affichePromo
// products.forEach(prod =>
//     affichePromo(prod)
// )
// On cible la partie html et y injecte le contenu de productshtml

// définition de affichePromo: sur chaque ligne, si tu trouves promotion= ou différent de oui, tu me l'ajoutes dans la var productshtml
// function affichePromo(prod) {
//     if (prod.promotion !== "non") {
//         productshtml +=
            // '<tr><td>'+product.name+'</td><td>$Prix</td><td>$Promotion</td><td>$Remise</td></tr>' (ancienne écriture)
//             `<tr><td>${prod.name}</td><td>${prod.categorie}</td><td>${prod.price}</td><td>${prod.discount}</td></tr>`
//     }
// }
// document.querySelector('.tabprod').innerHTML = productshtml ;

// 5/ AFFICHER EN PROMO + MONTANT SANS REMISE + MONTANT AVEC REMISE
// products.forEach(prod =>
//     calculPromo(prod)
// )
// function calculPromo(prod) {
// déclaration variables pour éviter de remettre parseInt dans le calcul.= plus léger
    // let price = parseInt(prod.price)
    // let discount = parseInt(prod.discount)
// Math.round et *100/100 à la fin pour limiter à 2 chiffres après la virgule
//     let montantDeduit= Math.round((price*(1-(discount)/100))*100)/100
//     if (prod.discount !== "non") {
//         productshtml +=
//             `<tr><td>${prod.name}</td><td>${prod.category}</td><td>${prod.price} €</td><td>${prod.discount}</td><td>${montantDeduit} €</td></tr>`
//     }
// }

//  6/ TRI ORDRE ALPHABETIQUE NOM PRODUITS
// products.sort(function compare(a, b) {
//     if (a.name < b.name)
//         return -1;
//     if (a.name > b.name)
//         return 1;
//     return 0;
// });
// products.forEach(prod =>
//     productshtml += prod.name + '</br>')

//     document.querySelector('.tabprod').innerHTML = productshtml

// 7/ Afficher la liste des produits triés par catégorie et par nom de produit.
products.sort(function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
products.forEach(prod =>
    productshtml +=
    `<tr><td>${prod.name}</td><td>${prod.category}</td></tr>`);
    document.querySelector('.tabprod').innerHTML = productshtml ;

