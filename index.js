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
  console.log(item + " has been added to your cart.");
  return cart;
}


function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var key in cart) {
      var string = "In your cart, you have ";
      string += `${key} at ${cart[key]}`
      }
      console.log(string);
    }
}

function total() {
  var totalCost = 0;
  for (var key in cart) {
    if(cart.hasOwnProperty(key)) {
      var value = cart[key];
      totalCost += value ;
    }
  }
  return totalCost;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart.hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    } else {
      console.log("That item is not in your cart");
      }
  }  
}

function placeOrder(cardNumber) {
  if (cardNumber == true) {
    console.log("Your total cost is $${total}, which will be charged to the card ${cardNumber}.")
    for (var i = 0; i < cart.length; i++) {
      cart[i].pop;
      i++;
    }
      return cart;

  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
