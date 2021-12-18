Vue.component("product", {
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},
  template: `
	<div class="product">
        <div class="product-image">
          <img :src="image" alt="" />
        </div>

        <div class="product-info">
          <h1> {{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{ outOfStock : !inStock }" >Out of Stock</p>
					<p>Shipping : {{ shipping }} </p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></div>

          <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton : !inStock }">Add to Cart</button>

          <div class="cart">
            <p>Cart({{ cart }})</p>
          </div>
        </div>
      </div>`,

			data () {
				return {
					brand: "Vue Mastery",
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
							variantQuantity: 10,
						},
						{
							variantId: 2235,
							variantColor: "blue",
							variantImage: "./assets/blue.jpg",
							variantQuantity: 0,
						},
					],
					cart: 0,
				};
				},
				methods: {
					addToCart() {
						this.cart += 1;
					},
					updateProduct(index) {
						this.selectedVariant = index;
					},
				},
				computed: {
					title() {
						return this.brand + " " + this.product;
					},
					image() {
						return this.variants[this.selectedVariant].variantImage;
					},
					inStock() {
						return this.variants[this.selectedVariant].variantQuantity;
					},
					shipping (){
						if (this.premium) {
							return "Free";
						}
						return 2.99;
					}
				},
	});
			

var app = new Vue({
  el: "#app",
	data: {
		premium: true,
	}
});
