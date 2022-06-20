// 1/ Créer une classe Product contenant les propriétés suivantes :
class Product {
    constructor(name, price, promotion, discount, category) {
        this.name = name
        this.price = price
        this.promotion = promotion
        this.discount = discount
        this.category = category
    }
}

// 2/ Créer une classe Category répertoriant les produits par catégorie avec la propriété
// 3/ Faites la liaison entre les produits et les catégories pour qu’on puisse obtenir la catégorie à partir du produit
// reprendre la classe Product dans le constructor pour lier les 2 classes
class Categorie {
    constructor(Product) {
        // la propriété name de la classe category est égale/liée à la propriété category de la classe Product
        this.name = Product.category
    }
}