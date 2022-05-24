let productList = [];
let productCart = [];

const fetchProduct = async() =>{
    try {
        const res = await axios(
            {
                url:"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
                method: "GET",
            }
        );
        productList = mapProduct(res.data);
        filterPhone(productList);
        renderCart(productCart);
        console.log(productCart);
        renderProduct(productList);
    }
    catch(err){
        console.log(err);
    }
};

fetchProduct();

const renderProduct = (data) => {
    let productListHTML = "";
  
    data.forEach((item) => {
        productListHTML += item.render();
    });
  
    document.getElementById("productList").innerHTML = productListHTML;
};

const mapProduct = (data) => {
    const results = data.map((item, i) => {
      return new Product(
          item.name,
          item.price,
          item.screen,
          item.backCamera,
          item.frontCamera,
          item.img,
          item.desc,
          item.type,
          item.id,
          item.quantity,
      )
    });
    return results;
};

const filterPhone = () => {
    let flag = false;
    let keyword = document.getElementById("chucvu").value.toLowerCase().trim();
    let result = [];
    for(var i = 0; i < productList.length; i++)
    {
        if(productList[i].type.toLowerCase().trim() === keyword){
            result.push(productList[i]);
            flag = true;
        }
    }
    if(!flag)
    {
        renderProduct(productList);
        return;
    }
    renderProduct(result);
}

const findById =  (id) => {
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].id === id) {
        return i;
      }
    }
    return -1;
};

const addToCart = (id) =>{
    let index = findById(id);
    if (index === -1) {
        alert("Sản phẩm không tồn tại!");
        return;
    }
    let foundProduct = productList[index];
    productCart.push(foundProduct);
}

const renderCart = (data) => {
    let productListHTML = "";
  
    data.forEach((item) => {
        productListHTML += item.render();
    });
  
    document.getElementById("productCart").innerHTML = productListHTML;
};