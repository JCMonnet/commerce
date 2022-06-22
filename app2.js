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
// définition de affichePromo: sur chaque ligne, si tu trouves promotion= ou différent de non, tu me l'ajoutes dans la var productshtml
// function affichePromo(prod) {
//     if (prod.promotion !== "non") {
//         productshtml +=
// // '<tr><td>'+product.name+'</td><td>$Prix</td><td>$Promotion</td><td>$Remise</td></tr>' (ancienne écriture)
//             `<tr><td>${prod.name}</td><td>${prod.category}</td><td>${prod.price}</td><td>${prod.discount}</td></tr>`
//     }
// }
// On cible la partie html et y injecte le contenu de productshtml
// document.querySelector('.tabprod').innerHTML = productshtml ;

// 5/ AFFICHER EN PROMO + MONTANT SANS REMISE + MONTANT AVEC REMISE
// products.forEach(prod =>
//     calculPromo(prod)
// )
// function calculPromo(prod) {
// // déclaration variables pour éviter de remettre parseInt dans le calcul.= plus léger
//     let price = parseInt(prod.price)
//     let discount = parseInt(prod.discount)
// // Math.round et *100/100 à la fin pour limiter à 2 chiffres après la virgule
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
// products.sort(function compare(a, b) {
//     if (a.name < b.name)
//         return -1;
//     if (a.name > b.name)
//         return 1;
//     return 0;
// });
// products.forEach(prod =>
//     productshtml +=
//     `<tr><td>${prod.name}</td><td>${prod.category}</td></tr>`);
//     document.querySelector('.tabprod').innerHTML = productshtml ;


// 8/ Donner la possibilité dans l’application de mettre à tout moment un produit en promotion
// ou de lui affecter un pourcentage de remise


let selectProd = document.querySelector('.selectpicker');
let form = document.querySelector('.noneBlock');
let nomProd = document.getElementById('nomprod');
let promo = document.getElementById('promo');
let remise = document.getElementById('remise');
let btnValid = document.getElementById('btnValide');
let tabProd = document.querySelector('.tabprod');
// var index "vide" pour pouvoir la réutiliser sans toutes les fonctions et listener
let index = ""


// event au 'change' pour que à la selection d'un produit dans le select, ça lance la fonction modifprod
selectProd.addEventListener('change', modifprod);
// Pas demandé: listener et fonctions pour que au clic dans l'input promotion et remise du formulaire, il devienne vide sans avoir à effacer
promo.addEventListener('click', effacepromo);
remise.addEventListener('click', effaceremise);
// entre les deux je modifie les valeurs promotion ou remise dans le formulaire apparu
// au clic sur le btn valide du formulaire on lance:
btnValid.addEventListener('click', modifPromoRemise);




// Fonctions
function modifprod() {
    // on reprend la var index "" et lui dit de prendre la value du produit qu'on va select. Donc [0] pour le 1er etc....Càd les values qu'on a mis sur chaque ligne du select html.
    index = selectProd.value;
    // Pour que la value de l'input "Nom de produit" du form devienne: Dans mon tab des produits "products", celui qui à l'index fixé ligne précédente, le nom (puis promo, puis remise)
    nomProd.value = products[index].name;
    promo.value = products[index].promotion;
    remise.value = products[index].discount;
    popUpForm();
}
function popUpForm() {
    form.style.display = 'block';
}
function effacepromo() {
    promo.value = "";
}
function effaceremise() {
    remise.value = "";
}
function modifPromoRemise() {
    // même chose en sens inverse pour que la modif soit bien prise en compte. Càd que promo.value et remise.value ont pris la nouvelle valeur saisie
    products[index].name = nomProd.value;
    products[index].promotion = promo.value;
    products[index].discount = remise.value;
    if (promo.value != 'oui' && promo.value != 'non') {
        alert(' veuillez selectionner oui ou non')
        productshtml = `<tr><td>${nomProd.value}</td><td>${category}</td><td>${price}</td><td>${promo.value}</td><td>${remise.value}</td><td>${montantDeduit}</td></tr>`;
        tabProd.innerHTML = productshtml;
    }
    if (remise.value <= 0 || remise.value > 99) {
        alert('veuillez saisir un montant entre 1 et 99')
        productshtml = `<tr><td>${nomProd.value}</td><td>${category}</td><td>${price}</td><td>${promo.value}</td><td>${remise.value}</td><td>${montantDeduit}</td></tr>`;
        tabProd.innerHTML = productshtml;
    }
    calculPrixFinal();
}
function calculPrixFinal() {
    //    Pas demandé, mais pour tout réafficher, faire un joli tableau
    category = products[index].category;
    price = products[index].price;
    //  Pas demandé, mais pour refaire le calcul "prix final" une fois la nouvelle réduction appliquée
    let prix = parseInt(products[index].price)
    let discount = parseInt(products[index].discount)
    // Math.round et *100/100 à la fin pour limiter à 2 chiffres après la virgule
    let montantDeduit = Math.round((prix * (1 - (discount) / 100)) * 100) / 100
    // enfin pour réafficher le produit modifié dans le tableau à l'ecran. En mettant bien cette fois les nouvelles var définies juste avant (ex promo.value)
    productshtml = `<tr><td>${nomProd.value}</td><td>${category}</td><td>${price}</td><td>${promo.value}</td><td>${remise.value}</td><td>${montantDeduit}</td></tr>`;
    tabProd.innerHTML = productshtml;
    popDownForm();
}
function popDownForm() {
    form.style.display = 'none';
}
