const products = [
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnTfUfF8-iKbcJXSdz_4_dHctkCZYlxV87g&usqp=CAU,"
    },
    {
      name: "candyTwo",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5Akzj8K_Q1676uLOrQuh3ZZJU3lpOrFYGIIBHuMWEn1n576OxDrJfrKGY2UyI5yaEog&usqp=CAU,"
        
    },
    {
      name: "candyThree",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBMLfDspqT9yDa6NnBga208ZT2KIg4hk61A&usqp=CAU,"
        
    },
    {
      name: "candyFour",
      price: 550,
      description: "Candy",
      type: "gummy",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2LlQLhKiu1gs-6fBDyir6U2FrHJHCMNpFQ&usqp=CAU  "
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIahT8aPIa0HkVsFQRX5Rv0STqa5NiwFVGw&usqp=CAU"
        
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      console.log('${product.name} - ${product.price}');
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }