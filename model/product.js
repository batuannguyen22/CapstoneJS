class Product {
  constructor(
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
    id,
    quantity
  ) {
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.desc = desc;
    this.type = type;
    this.id = id;
    this.quantity = quantity;
  }

  render() {
    return `
        <div class="col-sm-4 mb-5">
            <div class="card mx-auto mb-5 h-100" style="width: 27rem;">
            <img class="card-img-top" src="${this.img}" alt="${this.name}"/>
                <div class="card-body text-center">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.desc}</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="button" onclick="addToCart('${
                          this.id
                        }')">Add to Cart</button>
                    </div>
                    <h5 class="mt-5">Giá: ${this.price} đồng</h5>
                </div>
            </div>
        </div>
    `;
  }
}
