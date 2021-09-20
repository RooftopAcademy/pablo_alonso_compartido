class Shop {
  
  constructor() {
    this.cart = new Cart
    this.catalogue = new Catalogue
  }

  getCart() {
    return this.cart
  }

  getCatalogue() {
    return this.catalogue
  }

  fetchProduct() {
    // Simulamos un fetcha una API => response.json() => data
    const data = [
      {
        id: 'CdeG4by6YE826o0RegX1',
        picture: 'assets/nft/CdeG4by6YE826o0RegX1.png',
        title: 'Replicator',
        author: 'Mas Dog Jones',
        description: 'Lorem ipsum bla bla bla...',
        price: 4114000,
        category: ['most-valuable', 'strange'],
        isAvaliable: true,
      },
      {
        id: 'RmJ5Di91zS04t21LmuuW',
        picture: 'assets/nft/RmJ5Di91zS04t21LmuuW.png',
        title: 'Everydays - The First 5000 Days',
        author: 'Beeple',
        description: 'Lorem ipsum bla bla bla...',
        price: 69346250,
        category: ['most-valuable', 'colorful'],
        isAvaliable: true,
      },
      {
        id: '9EfJ41XbxZ8U5Yfry0lI',
        picture: 'assets/nft/9EfJ41XbxZ8U5Yfry0lI.png',
        title: 'CROSSROAD',
        author: 'Beeple',
        description: 'Lorem ipsum bla bla bla...',
        price: 6666660,
        category: ['colorful', 'strange'],
        isAvaliable: true,
      },
      {
        id: 'i8tgeWfv32te5gf8GcvX',
        picture: 'assets/nft/i8tgeWfv32te5gf8GcvX.jpg',
        title: 'Ocean Front',
        author: 'Beeple',
        description: 'Lorem ipsum bla bla bla...',
        price: 6000000,
        category: ['most-valuable', 'colorful'],
        isAvaliable: true,
      },
      {
        id: 't5y7Id2bRT93CxZXuQaB',
        picture: 'assets/nft/t5y7Id2bRT93CxZXuQaB.png',
        title: 'World Wide Web source code',
        author: 'Sir Tim Berners-Lee',
        description: 'Lorem ipsum bla bla bla...',
        price: 5430000,
        category: [],
        isAvaliable: true,
      }
    ];

    data.forEach(item => {
      const product = new Product

      product.id = item.id
      product.picture = item.picture
      product.title = item.title
      product.author = item.author
      product.description = item.description
      product.price = item.price
      product.category = item.category
      product.isAvaliable = item.isAvaliable

      this.catalogue.add(product)
    });

  }
}
