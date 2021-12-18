var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/green.jpg",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
		sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
				variantImage: "./assets/green.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
				variantImage: "./assets/blue.jpg"
      },
    ],
		cart: 0,
  },
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(variantImage) {
			this.image = variantImage
		},
		deleteToCart() {
			this.cart -= 1
		}
	}
});
