import { decorate, observable, action } from 'mobx';

export class ProductsStore {
  @observable products = [
    {
      id: 1,
      name: 'Menba',
      description: 'Menba Transformer',
      price: 399,
      image: require('../images/menba.jpg')
    },
    {
      id: 2,
      name: 'caros',
      description: 'caros Transformer',
      price: 450,
      image: require('../images/caros.jpg')
    },
    {
      id: 3,
      name: 'Heimamba',
      description: 'Heimamba Transformer',
      price: 370,
      image: require('../images/Heimamba.jpg')
    },
    {
      id: 4,
      name: 'Ototil',
      description: 'Ototil Transformer',
      price: 399,
      image: require('../images/ototil.jpg')
    },
    {
      id: 5,
      name: 'Robey',
      description: 'Robey Transformer',
      price: 350,
      image: require('../images/robey.jpg')
    },
    {
      id: 6,
      name: 'Scorpotric',
      description: 'Scorpotric Transformer',
      price: 450,
      image: require('../images/scorpotric.jpg')
    },
    {
      id: 7,
      name: 'Serocs',
      description: 'Serocs Transformer',
      price: 439,
      image: require('../images/serocs.jpg')
    },
    {
      id: 8,
      name: 'Makoles',
      description: 'Makoles Transformer',
      price: 420,
      image: require('../images/makoles.jpg')
    },
    {
      id: 9,
      name: 'Lento',
      description: 'Lento Transformer',
      price: 399,
      image: require('../images/lento.jpg')
    },{
      id: 10,
      name: 'Yoles',
      description: 'Yoles Transformer',
      price: 350,
      image: require('../images/yoles.jpg')
    },
    {
      id: 11,
      name: 'Grunes',
      description: 'Grunes Transformer',
      price: 350,
      image: require('../images/grunes.jpg')
    },
    {
      id: 12,
      name: 'Redes',
      description: 'Redes Transformer',
      price: 350,
      image: require('../images/redes.jpg')
    }
  ];
  @observable carts = [];
  @observable currentCart = [];

  @action removeFromCart(id) {
    this.carts = this.carts.filter(item => {
      return item.product_id !== id;
    });
    this.getCart();
  }

  @action increaseQuantityInCart(id) {
    this.carts.map(item => {
      if (item.product_id === id) item.quantity += 1;
      return item;
    });
    this.getCart();
  }
  @action decreaseQuantityInCart(id) {
    this.carts.map(item => {
      if (item.product_id === id && item.quantity > 1) item.quantity -= 1;
      return item;
    });
    this.getCart();
  }
  @action addToCart(id) {
    let found = false;
    this.carts.map(item => {
      if (item.product_id === id) {
        item.quantity += 1;
        found = true;
      }
      return item;
    });
    if (!found) {
      this.carts.push({ product_id: id, quantity: 1 });
    }
    this.getCart();
  }


  @action getCart() {
    let carts = this.carts;
    carts.map(item => {
      for (let i in this.products) {
        if (item.product_id === this.products[i].id) {
          item.image = this.products[i].image;
          item.name = this.products[i].name;
          item.description = this.products[i].description;
          item.price = this.products[i].price * item.quantity;
        }
      }
      return item;
    });
    this.currentCart = carts;
  }


  @observable loading = true;
  @observable auth0 = null;
  @observable authenticated = null;

  @action setLoader(loading) {
    this.loading = loading;
  }

  @action setAuth(token) {
    this.authenticated = token;
  }

  @action initialize(auth0) {
    this.auth0 = auth0;
  }
}
