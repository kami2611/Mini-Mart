const header = document.querySelector(".header");
const products = [
    {
        img: "https://picsum.photos/200",
        name: "Product 1",
        description: "Description of Product 1",
        price: "$10",
    },
    {
        img: "https://picsum.photos/200",
        name: "Product 2",
        description: "Description of Product 2",
        price: "$20",
    },
    {
        img: "https://picsum.photos/200",
        name: "Product 3",
        description: "Description of Product 3",
        price: "$30",
    },
    // Add more products as needed
];
const products_container = document.querySelector(".products");
for(let i = 0 ; i<products.length; i++)
{
    const product = products[i];
    const product_card = document.createElement("div");
    product_card.classList.add("product-card");
    product_card.innerHTML +=
    `
            <img src="${product.img}" alt="dummy">
            <h2 class="product-name">${product.name}</h2>
            <p class="description">${product.description}</p>
            <span class="price">${product.price}</span>
            <input type= "number" class="quantity" value="1" min="1" max="10">
            <button class="add-to-cart" data-name = "${product.name}" data-price = "${product.price}">Add to Cart</button>
            </div>
    `
    product_card.classList.add("displayFlex");
    products_container.appendChild(product_card);
}


function addToCart(event)
{
    const name= event.target.dataset.name;
    const price = parseFloat(event.target.dataset.price.replace('$', '').replace(',', ''));
    const quantity = event.target.previousElementSibling.value;
    console.log(name);
    console.log(price);
    console.log("total price is: " + price * quantity);
    //adding a class div to the added products in checkout.
    const createdDiv = document.createElement("div");
    createdDiv.classList.add("added-product");
    const checkoutHeading = document.querySelector(".checkout-heading-main");
    checkoutHeading.style.visibility = 'visible';
    createdDiv.innerHTML += `<h3 class="p-name">
            ${name}
        </h3>
        <input type="number" name="" class="p-quantity" value="${quantity}">
        <span class="p-price">
            ${price}
        </span>
        `
        header.appendChild(createdDiv);
}


const addToCartButtons = document.querySelectorAll(".add-to-cart");

for(let i = 0 ; i<addToCartButtons.length; i++)
{
    addToCartButtons[i].addEventListener("click", addToCart);
}
//adding an event listener to every button of the products container and accessing its id.
