var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
		sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
  },
});
