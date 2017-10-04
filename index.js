var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.ceil(Math.random() * 100);
  var obj = new Object({});
  obj[item] = itemPrice;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
      var string = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
         string += `${key} at $${cart[i][key]}`
           if(i != cart.length) {
             string += ", ";
           } else {
               string += ".";
           }
        }
      }
      console.log(string);
    }
}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var value = cart[i][key];
      totalCost += value ;
    }
  }
  return totalCost;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    } else {
        console.log("That item is not in your cart");
      }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber > 10000000) {
    var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    for (var i = 0; i < cart.length; i++) {
      cart = [];
    }
    return cart;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
