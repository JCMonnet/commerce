    let products=[]
    let cd1= new Product ('michaël Gregorio','43,00 Eu','non','non')
    let cd2= new Product ('daniel Guichard','43,00 Eu','non','20%')
    let pc1= new Product ('PC Portable Gaming MSI GL75 Leopard 10SFK-457FR 17,3 Intel Core I7 16 Go RAM 256 Go SSD + 1 To SATA Noir','1999.99 Eu','oui','20%')
    let pc2= new Product ('PC Portable Gaming AsusTUF505DVHN232T 15.6"AMD Ryzen 7 16Go RAM 512 GoSSD Noir','1499,99 Eu','oui','33%')
    let pc3= new Product ('PC Portable Gaming AcerPredator Triton700 PT715-51-76D4 15.6"Gaming IntelCore i7 32 GoRAM 256 Go SSD+ 256 Go SATANoir','3499,99 Eu','non','non')
    products.push(cd1,cd2,pc1,pc2,pc3)

    let productshtml=""

    products.forEach(prod =>
        productshtml +=
        '<tr><td>{$Product.name}</td><td>$Prix</td><td>$Promotion</td><td>$Remise</td></tr>'
        )
        document.querySelector('.tabprod').innerHTML=productshtml


    console.log(productshtml);
    
    

