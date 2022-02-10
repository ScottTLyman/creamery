const iceCream = [{ name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }, { name: 'Rocky Road', image: 'https://celebratingsweets.com/wp-content/uploads/2021/04/Rocky-Road-Ice-Cream-1-5.jpg', price: 2.50 }]

const cones = [{ name: 'Cake Cone', image: 'https://cdnimg.webstaurantstore.com//images/products/large/42980/1913716.jpg', price: 1 }, { name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [{ name: 'Hot Fudge', image: 'https://iambaker.net/wp-content/uploads/2020/05/chocolate-fudge-3-300x300.jpg', price: 1.50 }, { name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { name: 'Whipped Cream', image: 'https://www.cookingclassy.com/wp-content/uploads/2019/04/whipped-cream-1.jpg', price: 1 }, { name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]
let total = 0
let cart = []

function drawScoop() {
  let template = ''
  for (let i = 0; i < iceCream.length; i++) {
    const scoop = iceCream[i];
    template += `
    <div class="col-6 bg-light p-0 menu-item clickable">
      <img class="img-fluid"
      src="${scoop.image}"
      alt="">
        <div class="d-flex justify-content-between p-2">
        <h6>${scoop.name}</h6>
        <p>$${scoop.price.toFixed(2)}</p>
        </div>
    </div>
    `
  }
  document.getElementById('scoop').innerHTML = template
}

function drawTop() {
  let template = ''
  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i];
    template += `
    <div class="col-6 bg-light p-0 menu-item clickable">
      <img class="img-fluid"
      src="${topping.image}"
      alt="">
        <div class="d-flex justify-content-between p-2">
        <h6>${topping.name}</h6>
        <p>$${topping.price.toFixed(2)}</p>
        </div>
    </div>
    `
  }
  document.getElementById('topping').innerHTML = template
}

function drawCone() {
  let template = ''
  for (let i = 0; i < cones.length; i++) {
    const cone = cones[i];
    template += `
    <div class="col-6 bg-light p-0 menu-item clickable">
      <img class="img-fluid"
      src="${cone.image}"
      alt="">
        <div class="d-flex justify-content-between p-2">
        <h6>${cone.name}</h6>
        <p>$${cone.price.toFixed(2)}</p>
        </div>
    </div>
    `
  }
  document.getElementById('cone').innerHTML = template
}

function drawCart() {
  let sTotal = 0
  let template = ''
  console.log('cart')
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    template += `
  <div class="col-12">
  <div class="d-flex justify-content-between p-1">
    <h6>${item.name}</h6>
    <b>$${item.price}</b>
  </div>
</div>
`
  }
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerText = total.toFixed(2)
  document.getElementById('checkout').disabled = total
}

drawCone()
drawTop()
drawScoop()
drawCart()