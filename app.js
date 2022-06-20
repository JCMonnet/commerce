//  var=[] et ensuite push pour "mettre" les 5 produits dans un tabelau products
let products = []
let cd1 = new Product('michaël Gregorio', '43,00', 'non', 'non')
let cd2 = new Product('daniel Guichard', '43,00', 'non', '20%')
let pc1 = new Product('PC Portable Gaming MSI GL75 Leopard 10SFK-457FR 17,3 Intel Core I7 16 Go RAM 256 Go SSD + 1 To SATA Noir', '1999.99 Eu', 'oui', '20%')
let pc2 = new Product('PC Portable Gaming AsusTUF505DVHN232T 15.6"AMD Ryzen 7 16Go RAM 512 GoSSD Noir', '1499,99 Eu', 'oui', '33%')
let pc3 = new Product('PC Portable Gaming AcerPredator Triton700 PT715-51-76D4 15.6"Gaming IntelCore i7 32 GoRAM 256 Go SSD+ 256 Go SATANoir', '3499,99 Eu', 'non', 'non')
products.push(cd1, cd2, pc1, pc2, pc3)

// AFFICHER ELEMENTS EN PROMOTION
// déclaration variable vide qu'on va réutiliser avec innerhtml pour injecter dans le css
let productshtml = ""
// sur chaque ligne du tableau Products, applique la fonction affichePromo
// products.forEach(prod =>
//     affichePromo(prod)
// )
// On cible la partie html et y injecte le contenu de productshtml

// définition de affichePromo: sur chaque ligne, si tu trouves promotion= ou différent de oui, tu me l'ajoutes dans la var productshtml
// function affichePromo(prod) {
//     if (prod.promotion !== "non") {
//         productshtml +=
//             // '<tr><td>'+product.name+'</td><td>$Prix</td><td>$Promotion</td><td>$Remise</td></tr>' (ancienne écriture)
//             `<tr><td>${prod.name}</td><td>${prod.price}</td><td>${prod.discount}</td></tr>`
//     }
// }

// AFFICHER EN PROMO + MONTANT SANS REMISE + MONTANT AVEC REMISE
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
//             `<tr><td>${prod.name}</td><td>${prod.price} €</td><td>${prod.discount}</td><td>${montantDeduit} €</td></tr>`
//     }
// }

// TRI ORDRE ALPHABETIQUE NOM DES PRODUITS
products.forEach(prod =>
        trier(prod)
    )  
    function trier(prod) {
        let ordre = ['michael gregorio','daniel guichard','pc msi','pc asus','pc acer']
        let ordreAlpha = ordre.sort()
        console.log(ordreAlpha);
        productshtml =
        `<tr><td>${ordreAlpha}</td></tr>`
        }
        
    document.querySelector('.tabprod').innerHTML = productshtml


