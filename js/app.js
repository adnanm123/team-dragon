'use strict';

function AppState() {
  this.allProducts = [];
}


AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function() {
  let stringProduct = JSON.stringify(this.allProducts);
  console.log(stringProduct);
  localStorage.setItem('productIndexArr', stringProduct);
  // TODO: Fill in this instance method to save product data to local storage
}

AppState.prototype.loadItems = function () {
  this.instantiateProducts();
  let potentialProduct = localStorage.getItem('productIndexArr');
  console.log(potentialProduct);
  if (potentialProduct) {
    let parsedProduct = JSON.parse(potentialProduct);
    this.allProducts = parsedProduct;
    console.log(parsedProduct);
  }
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load

  // this.instantiateProducts();

}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
