const list = [
    { name: "Coca-Cola Lata 350 ML", description: "Coca-Cola Lata Sabor Original.", price: 3.99 },
    { name: "Óleo Soya 900 ML", description: "Óleo Soya de ótima qualidade.", price: 8.99 },
    { name: "Leite Condensado Italac 395 ML", description: "Leite Condensado de ótima qualidade com 6% teor de gordura.", price: 8.99 },
    { name: "Leite Condensado Italac 395 ML", description: "Leite Condensado de ótima qualidade com 6% teor de gordura.", price: 8.99 },
]

console.log(list)

list.map(product => {
    console.log(product.name)
})