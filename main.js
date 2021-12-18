var app = new Vue({
  el: "#app",
  data: {
		brand : "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
				variantImage: "./assets/green.jpg",
				variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
				variantImage: "./assets/blue.jpg",
				variantQuantity: 0
      },
    ],
		cart: 0,
  },
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title() {
			return this.brand + " " + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
});
