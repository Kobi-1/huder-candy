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
      "https://www.foodandwine.com/thmb/Q3pBGRKZfIWyTsX3Y52yiU0JZaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1900-hersheys-chocolate-bar-2000-ee974cb9742649a79f1d287f1985d41a.jpg,"
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
      "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/9/0/909712c63e3effcef05fe62faabfc4d0d5a53f25/mars-bar-1932.jpg,"
        
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